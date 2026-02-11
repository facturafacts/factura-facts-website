import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: Request) {
  try {
    // Check if Stripe keys are configured
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    
    if (!stripeSecretKey) {
      console.error('STRIPE_SECRET_KEY not configured');
      return NextResponse.json(
        { error: 'Payment system not configured. Please contact support.' },
        { status: 503 }
      );
    }

    if (!baseUrl) {
      console.error('NEXT_PUBLIC_BASE_URL not configured');
      return NextResponse.json(
        { error: 'Server configuration error. Please contact support.' },
        { status: 503 }
      );
    }

    // Initialize Stripe
    const stripe = new Stripe(stripeSecretKey);
    
    const body = await req.json();
    const { formData } = body;

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Tax Consultation - Factura Facts',
              description: `1-hour personalized consultation with ${formData.firstName} ${formData.lastName}`,
            },
            unit_amount: 15000, // $150.00 in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/booking/cancel`,
      metadata: {
        customerName: `${formData.firstName} ${formData.lastName}`,
        customerEmail: formData.email,
        customerPhone: formData.phone,
        residencyStatus: formData.residencyStatus,
        taxNeeds: formData.taxNeeds,
        urgency: formData.urgency || 'Not specified',
        questions: formData.questions || 'None',
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Stripe error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}