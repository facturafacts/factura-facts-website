# Google Reviews Widget Setup Instructions

## 🎯 Overview
Your website now has a Google Reviews section ready for the Elfsight widget. Follow these steps to activate it.

## 📋 Prerequisites
- You have 19 Google reviews with a 5.0 rating ✓
- Your Google Business Profile: https://g.page/r/CTtbpDegarsWEAE/review

## 🚀 Step-by-Step Setup

### Step 1: Create Elfsight Account (FREE)
1. Go to: https://elfsight.com/google-reviews-widget/
2. Click "Get Started" or "Create Free Widget"
3. Sign up with your email or Google account
4. **Verify your email**

### Step 2: Configure Your Widget
1. In Elfsight dashboard, click "Create Widget"
2. Select "Google Reviews" template
3. Click "Connect Google"
4. Authorize Elfsight to access your Google Business Profile
5. Select "Factura Facts" from the list

### Step 3: Customize the Widget
**Layout Settings:**
- Layout: Grid or Carousel
- Number of reviews to show: 6-8
- Columns: 3 (desktop), 1 (mobile)

**Style Settings (Match Your Brand):**
- Background: #faf9f6 (cream)
- Card background: #ffffff (white)
- Star color: #c9b037 (gold)
- Text color: #1a1a1a (dark text)
- Border radius: 16px
- Font: Use system font or match your website

**Content Settings:**
- Show reviewer name: Yes
- Show reviewer photo: Yes
- Show review date: Yes
- Show star rating: Yes
- Character limit: 200-250

**Filter Settings:**
- Minimum rating: 4 stars (show only good reviews)
- Sort by: Newest first
- Hide reviews without text: Optional

### Step 4: Get the Embed Code
1. Click "Add to Website" button
2. Copy the HTML code (looks like):
   ```html
   <script src="https://apps.elfsight.com/p/platform.js" defer></script>
   <div class="elfsight-app-XXXXXXXX"></div>
   ```
3. Save this code somewhere safe

### Step 5: Add to Your Website
1. Open `components/GoogleReviews.tsx`
2. Find this section:
   ```tsx
   {/* Elfsight Widget Container */}
   <div className="bg-brand-cream rounded-2xl p-8 border border-brand-hairline shadow-card">
     <div className="text-center py-12">
       <p className="text-brand-text-light mb-4">
         Google Reviews Widget will appear here
       </p>
       <p className="text-sm text-brand-text-muted">
         See setup instructions below
       </p>
     </div>
   </div>
   ```

3. Replace it with:
   ```tsx
   {/* Elfsight Widget Container */}
   <div className="bg-brand-cream rounded-2xl p-8 border border-brand-hairline shadow-card">
     <script src="https://apps.elfsight.com/p/platform.js" defer></script>
     <div class="elfsight-app-XXXXXXXX"></div>
   </div>
   ```
   (Replace XXXXXXXX with your actual widget ID from Elfsight)

### Step 6: Deploy Changes
```bash
git add .
git commit -m "Add Elfsight Google Reviews widget"
git push origin master
```

Wait 30 seconds for Vercel to auto-deploy!

## 📊 What You'll See

### Free Plan Features ($0/month):
- ✅ Up to 200 widget views/month
- ✅ Auto-sync every 24 hours
- ✅ Mobile responsive
- ✅ "Powered by Elfsight" watermark
- ✅ Up to 10 reviews displayed

### When to Upgrade ($5/month):
- When you exceed 200 views/month
- Want to remove Elfsight branding
- Need real-time sync
- Want more customization options

## 🎨 Design Details

### Current Section Includes:
- **5-star rating display** with gold stars
- **19 reviews count**
- **"Write a Review" CTA button** linking to your Google profile
- **Schema markup** for SEO (Google rich snippets)
- **Brand-matched styling** (cream background, gold accents)

### SEO Benefits:
- Star ratings may appear in Google search results
- Aggregate rating schema tells Google you have reviews
- Increases click-through rate from search results

## 🛠️ Troubleshooting

### Widget not appearing?
1. Check if widget ID is correct
2. Verify Elfsight account is active
3. Check browser console for errors
4. Ensure Google Business Profile is connected

### Reviews not showing?
1. Check that reviews are public (not private)
2. Verify minimum 4-star filter isn't too strict
3. Wait 24 hours for initial sync
4. Try refreshing the Elfsight widget

### Too many Elfsight views?
- Free plan: 200 views/month
- If exceeded, widget will show "Upgrade" message
- Upgrade for $5/month for unlimited views
- OR switch to Google Maps embed (100% free, no limits)

## 📝 Alternative: Google Maps Embed (100% Free, No Limits)

If you prefer completely free with no view limits:

1. Go to: https://www.google.com/maps/place/Factura+Facts
2. Click "Share" → "Embed a map"
3. Copy the iframe code
4. Replace the Elfsight section with this iframe

**Pros:** 100% free forever, shows location + reviews
**Cons:** Less customizable, Google branding prominent

## ✅ Next Steps

1. ✅ Create Elfsight account
2. ✅ Connect Google Business Profile
3. ✅ Customize widget styling
4. ✅ Copy embed code
5. ✅ Update GoogleReviews.tsx
6. ✅ Deploy to production
7. ✅ Test on mobile and desktop

## 📞 Support

**Elfsight Support:** https://elfsight.com/help/
**Google Business Help:** https://support.google.com/business

---

**Your Google Reviews section is ready! Once you add the Elfsight widget, your 5.0-star rating will be prominently displayed to build trust with potential clients.** 🌟