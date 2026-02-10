# Factura Facts Website

A modern, fast, and AI-updatable website for Factura Facts - Mexico Tax & Accounting Services.

## 🚀 What's Included

- **4 Pages**: Home, Services, FAQs, Resources
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Fast Performance**: Static site generation for instant loading
- **SEO Optimized**: Meta tags and semantic HTML
- **Contact Form**: Ready for form submissions
- **WhatsApp Integration**: Direct messaging capability

## 📁 Project Structure

```
app/
├── layout.tsx          # Root layout with metadata
├── globals.css         # Global styles & Tailwind
├── page.tsx            # Home page
├── services/
│   └── page.tsx        # Services page
├── faqs/
│   └── page.tsx        # FAQs page
├── resources/
│   └── page.tsx        # Resources page
components/
├── Navbar.tsx          # Navigation component
└── Footer.tsx          # Footer component
public/
└── images/             # Image assets
dist/                   # Build output (for deployment)
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Output**: Static Export (for easy hosting)

## 🚀 Deployment to Vercel (Free)

### Option 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

### Option 2: Vercel Dashboard (Drag & Drop)

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Drag the `dist` folder from this project into the dashboard
3. Your site will be live in seconds!

### Option 3: GitHub + Vercel (Auto-deploy)

1. Push this code to a GitHub repository
2. Connect the repo to Vercel
3. Every push to main will auto-deploy!

## 🔄 Updating the Website via AI

This website is designed to be easily updated through AI. Here are the types of changes you can request:

### Content Updates
- "Update the hero section text"
- "Add a new FAQ about [topic]"
- "Change the contact email to [new email]"
- "Update Daniel's bio"

### Design Changes
- "Change the primary color to [color]"
- "Make the navbar sticky"
- "Add an image gallery to the services page"

### New Features
- "Add a blog section"
- "Create a testimonials page"
- "Add a booking calendar"

### SEO Improvements
- "Add meta descriptions to all pages"
- "Create a sitemap"
- "Add structured data markup"

## 📝 Making Changes

To update the website:

1. **Tell me what you want to change** (be specific!)
2. **I'll make the changes** to the appropriate files
3. **Run `npm run build`** to generate new static files
4. **Redeploy** to Vercel

## 📱 Adding Real Images

Replace the placeholder images in `/public/images/`:
- `tere.jpg` - Teresa's photo
- `francisco.jpg` - Francisco's photo
- `profile-pic.jpg` - Daniel's photo
- `service-*.jpg` - Service page images

## 📧 Setting Up Contact Form

The contact form is currently a placeholder. To make it functional:

1. **Option A - Email Service**: Use Resend, SendGrid, or EmailJS
2. **Option B - Form Backend**: Use Formspree, Netlify Forms, or Airtable
3. **Option C - WhatsApp**: Redirect to WhatsApp with pre-filled message

## 🎨 Customization

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'brand': {
    600: '#0284c7',  // Change this hex code
    // ... other shades
  }
}
```

### Fonts
Add fonts to `app/layout.tsx` and update Tailwind config.

## 🆘 Need Help?

Just tell me what you need! I can:
- Add new pages
- Modify existing content
- Change the design
- Add new features
- Fix any issues
- Optimize performance

## 📄 License

This is your website - you own it completely!

---

**Built with ❤️ for Factura Facts**