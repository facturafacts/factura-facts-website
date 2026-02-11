# Stripe & Calendly Setup Guide

## 🎯 Overview
Your website now has a complete booking system with:
- ✅ Intake form for client information
- ✅ Stripe checkout for $150 USD payment
- ✅ Success page with Calendly scheduling
- ✅ Cancel page for failed payments

## 💳 Step 1: Set Up Stripe Account

### Create Stripe Account
1. Go to https://stripe.com
2. Sign up for a free account
3. Complete verification (takes 1-2 business days)

### Get API Keys
1. In Stripe Dashboard, go to Developers → API Keys
2. Copy **Publishable Key** (starts with `pk_live_` or `pk_test_`)
3. Copy **Secret Key** (starts with `sk_live_` or `sk_test_`)

### Create Environment Variables
Create a `.env.local` file in your project root:

```env
# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_publishable_key_here
STRIPE_SECRET_KEY=sk_live_your_secret_key_here

# Base URL
NEXT_PUBLIC_BASE_URL=https://factura-facts-website.vercel.app
```

**For testing, use test keys first:**
- Test keys start with `pk_test_` and `sk_test_`
- Use test card: 4242 4242 4242 4242
- Any future date, any 3 digits for CVC

## 📅 Step 2: Set Up Calendly (FREE)

### Create Calendly Account
1. Go to https://calendly.com
2. Sign up with your Google Workspace email
3. Connect your Google Calendar

### Set Up Event Type
1. Click "Create New Event Type"
2. Choose "One-on-One"
3. Set duration: **60 minutes**
4. Event name: "Tax Consultation"
5. Description: "Personalized tax consultation with Factura Facts"
6. Location: Zoom or Phone (your choice)

### Set Your Availability
1. Click "Availability" on your event type
2. Set your working hours
3. Add buffer time if needed
4. Set minimum notice (e.g., 24 hours)

### Get Your Scheduling Link
1. Go to your event type
2. Copy the link (looks like: `https://calendly.com/yourname/tax-consultation`)
3. **Replace the link in `/app/booking/success/page.tsx`** (line with `href="https://calendly.com"`)

### Optional: Embed Calendly Widget
For a better experience, you can embed Calendly directly:

1. In Calendly, go to your event type
2. Click "Share Your Link" → "Add to Website"
3. Choose "Inline Embed"
4. Copy the HTML code
5. Replace the placeholder in `/app/booking/success/page.tsx` with the embed code

## 🚀 Step 3: Deploy with Environment Variables

### For Vercel (Production)

1. Go to your Vercel Dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add these variables:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` = your publishable key
   - `STRIPE_SECRET_KEY` = your secret key
   - `NEXT_PUBLIC_BASE_URL` = your domain

5. Redeploy the project

### For Local Development

1. Create `.env.local` file (as shown above)
2. Run `npm run dev`
3. Test with Stripe test keys

## 📊 What You Can Control

### In Calendly (You Control):
- ✅ Your availability (block/unblock times)
- ✅ Working hours
- ✅ Minimum notice required
- ✅ Buffer between meetings
- ✅ Calendar sync (automatic)
- ✅ Email notifications
- ✅ Reminder emails to clients

### In Stripe (Automatic):
- ✅ Payment processing
- ✅ Receipts sent to clients
- ✅ Payment confirmation emails
- ✅ Refund handling

## 💰 Pricing

**Stripe Fees:**
- 2.9% + $0.30 per transaction (US cards)
- ~4.5% (international cards)
- No monthly fees

**Calendly Free:**
- 1 event type (Tax Consultation)
- Unlimited bookings
- Basic integrations
- Calendly branding

**Calendly Essentials ($8/month):**
- Remove Calendly branding
- Multiple event types
- Advanced integrations
- Custom notifications

## 🧪 Testing the Flow

1. Go to `/booking` on your site
2. Fill out the intake form
3. Click "Proceed to Payment"
4. Use test card: 4242 4242 4242 4242
5. Complete payment
6. You should see the success page
7. Click "Schedule Now" to go to Calendly

## 📧 Email Notifications

**You'll receive:**
- Stripe payment confirmation
- Calendly booking confirmation
- Client's intake form details

**Client receives:**
- Stripe receipt
- Calendly booking confirmation
- Reminder emails (24h before)

## 🔒 Security Notes

- ✅ Stripe handles all payment data securely (PCI compliant)
- ✅ Never store credit card numbers
- ✅ Environment variables are server-side only (except NEXT_PUBLIC_*)
- ✅ HTTPS required for production

## 🆘 Troubleshooting

**Payment not working?**
- Check that Stripe keys are correct
- Ensure keys are in Vercel environment variables
- Check browser console for errors

**Calendly not showing?**
- Verify your Calendly link is correct
- Check that the link is updated in the success page

**Form not submitting?**
- Check browser console for JavaScript errors
- Ensure all required fields are filled

## 📝 Next Steps

1. ✅ Sign up for Stripe
2. ✅ Get API keys
3. ✅ Add keys to Vercel environment variables
4. ✅ Create Calendly account
5. ✅ Set up 60-minute event
6. ✅ Update Calendly link in code
7. ✅ Test the full booking flow
8. ✅ Go live!

---

**Questions?** The booking system is ready to go once you add your Stripe and Calendly credentials!