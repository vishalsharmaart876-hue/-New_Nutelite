# Nutelite - Premium Dry Fruits Website

A professional, responsive website for Nutelite dry fruits business with WhatsApp integration for easy ordering.

## Files Included

1. **index.html** - Main HTML structure
2. **style.css** - Complete styling and animations
3. **script.js** - Interactive features and smooth scrolling

## Features

✅ Fully responsive design (mobile, tablet, desktop)
✅ WhatsApp integration for direct ordering
✅ Click-to-call functionality
✅ Smooth scrolling navigation
✅ Animated product cards and features
✅ Premium, elegant design with warm color palette
✅ 6 product showcases with individual order buttons
✅ Floating WhatsApp button for easy access

## Contact Information

- **WhatsApp:** +91 99116 26592
- **Phone:** +91 88822 16421

## How to Use

1. Place all three files (index.html, style.css, script.js) in the same folder
2. Open `index.html` in any web browser
3. That's it! Your website is ready to use

## Customization Guide

### 🔥 Update Product Prices (EASY!)
**The prices are now DYNAMIC!** When you change the price on the website, it automatically updates in the WhatsApp message too!

To change a price, simply edit the price in `index.html`:
```html
<!-- Find the product and change the price -->
<span class="price" data-product="Premium Almonds">₹450/kg</span>
<!-- Change to your new price -->
<span class="price" data-product="Premium Almonds">₹500/kg</span>
```

**That's it!** The WhatsApp message will automatically include the new price. No need to update anything else!

### Update Products
Edit the products section in `index.html` (around line 80-175):
- Change product names
- Update prices
- Modify descriptions
- Replace emoji icons with actual product images

### Change Colors
Edit CSS variables in `style.css` (lines 1-8):
```css
:root {
    --primary: #2C1810;    /* Main dark brown */
    --secondary: #D4A574;  /* Gold/tan accent */
    --accent: #8B4513;     /* Medium brown */
    --light: #F5EDE4;      /* Light beige background */
}
```

### Update Contact Numbers
Replace the phone numbers in `index.html`:
- Search for: `919911626592` (WhatsApp)
- Search for: `918882216421` (Phone)

### Add Real Product Images
Replace the emoji icons in product cards with actual images:
```html
<!-- Replace this -->
<div class="product-image">🌰</div>

<!-- With this -->
<div class="product-image">
    <img src="images/almonds.jpg" alt="Premium Almonds">
</div>
```

## Browser Support

✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Fast loading time
- Optimized animations
- Mobile-first responsive design
- Clean, semantic HTML

## License

This website is created for Nutelite. All rights reserved.

## Support

For any questions or customization needs, feel free to reach out!

---

**Built with ❤️ for Nutelite - Premium Dry Fruits & Nuts**
