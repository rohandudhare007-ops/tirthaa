# Tirtha's Love Universe - Vanilla HTML/CSS/JavaScript

A beautiful, romantic website converted from React/TypeScript/Vite to pure HTML, CSS, and JavaScript while maintaining all the design elements, animations, and functionality.

## 📁 Project Structure

```
/
├── index.html          # Main HTML file
├── styles.css          # Complete styling with animations
├── script.js           # Interactive functionality
├── images/             # All images folder
│   ├── hero-sunflower.png
│   ├── hero-decorative.png
│   ├── tirtha_sunflower_1.jpg
│   ├── tirtha_sunflower_2.jpg
│   ├── girl_01.jpg - girl_20.jpg
│   ├── swan.png
│   ├── cat.png
│   └── ... (44 total images)
└── README.md          # This file
```

## 🎨 Design Features

### Color Palette
- **Sunflower**: #F4D03F (Warm yellow)
- **Ocean**: #85C1E9 (Soft blue)
- **Blush**: #F5B7B1 (Romantic pink)
- **Peach**: #FAD7A0 (Gentle peach)
- **Lavender**: #D7BDE2 (Soft purple)
- **Ivory**: #FEF9E7 (Cream background)
- **Charcoal**: #2C3E50 (Dark text)

### Typography
- **Playfair Display** - Elegant headings
- **Inter** - Body text
- **Poppins** - Buttons and labels
- **Dancing Script** - Decorative text

### Key Features
- ✨ 8 Beautifully designed sections
- 💫 Smooth scroll animations
- 🎯 Intersection Observer for scroll-triggered effects
- 💓 Heart-beat pulse effects
- 🌊 Animated waves
- ⚡ Hover transformations
- 🎪 Staggered card animations
- 🖱️ Heart cursor trail effect
- 🌟 Floating sparkle particles
- 📱 Fully responsive design

## 🚀 Quick Start

### Option 1: Open Directly
Simply open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge).

### Option 2: Use a Local Server (Recommended)
Using a local server ensures all features work correctly:

**Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Node.js (http-server):**
```bash
npx http-server -p 8000
```

**PHP:**
```bash
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## 📖 Sections Overview

### 1. Hero Section
- Rotating sunflower with glow effect
- Animated title and subtitle
- Call-to-action buttons
- Floating decorative sunflowers

### 2. Sunflower Gallery
- 4 beautiful photos of Tirtha with sunflowers
- Staggered grid layout
- Glass-morphism card with poetic text

### 3. Ocean Dreams
- Circular photo layout
- Animated waves background
- Deep ocean gradient
- Peaceful ocean-themed content

### 4. Her Eyes
- Three stunning portrait photos
- Romantic gradient background
- Elegant typography
- Smooth scale animations

### 5. Swan & Cat Love
- Floating swan and cat illustrations
- Dual symbolism (grace + playfulness)
- Center portrait with pulse effect
- Heartwarming message

### 6. Forever Promise
- Four circular floating portraits
- Love letters grid layout
- Infinity symbol
- Romantic promises

### 7. Photo Gallery
- 12 beautiful moments
- Masonry-style grid
- Hover zoom and rotate effects
- Responsive layout

### 8. Footer
- Circular portrait arrangement
- 6 surrounding floating photos
- Final message and signatures
- Replay and share buttons

## 🎭 Interactive Features

### Heart Cursor Trail
- Hearts follow your mouse movement
- Random heart emojis
- Fade-out animation
- Throttled for performance

### Music Toggle
- Fixed top-right position
- Glass-morphism style
- Toggle state indicator
- Ready for audio integration

### Smooth Scrolling
- Native smooth scroll behavior
- Intersection Observer animations
- Progressive content reveal
- Optimized performance

### Parallax Effects
- Decorative elements move on scroll
- Multiple animation speeds
- Subtle depth perception
- GPU-accelerated

## 🛠️ Customization Guide

### 1. Change Images
Replace images in the `/images` folder with your own photos. Keep the same filenames or update the references in `index.html`.

**Image Requirements:**
- **hero-sunflower.png**: 500x500px, transparent background
- **hero-decorative.png**: 200x200px, transparent background
- **tirtha_sunflower_*.jpg**: Portrait photos, recommended 800x1200px
- **girl_*.jpg**: Various sizes, portrait orientation
- **swan.png, cat.png**: 500x500px, transparent background

### 2. Update Text Content
Edit the text in `index.html`. Main sections to customize:

```html
<!-- Hero title -->
<h1 class="hero-title">Your Title Here</h1>

<!-- Section text -->
<p class="hero-subtitle">Your subtitle text...</p>

<!-- Love letters -->
<div class="love-letter glass-card">
    <h3>Your Heading</h3>
    <p>Your message...</p>
</div>
```

### 3. Modify Colors
Update the CSS variables in `styles.css`:

```css
:root {
    --sunflower: #YourColor;
    --ocean: #YourColor;
    --blush: #YourColor;
    /* etc. */
}
```

### 4. Adjust Animations
Control animation speed and behavior in `styles.css`:

```css
@keyframes float {
    /* Modify keyframes here */
}

.animate-float {
    animation: float 4s ease-in-out infinite;
    /* Change duration, timing, etc. */
}
```

### 5. Add New Sections
Copy an existing section structure and modify:

```html
<section id="new-section" class="section-pinned">
    <div class="floating-particles"></div>
    <!-- Your content here -->
</section>
```

Don't forget to add corresponding CSS in `styles.css`.

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 767px and below
- **Small Mobile**: 480px and below

## ⚡ Performance Optimizations

1. **Image Lazy Loading**: Images load as they enter viewport
2. **Debounced Scroll**: Throttled scroll events for better performance
3. **CSS Animations**: GPU-accelerated transformations
4. **Intersection Observer**: Efficient scroll-triggered animations
5. **Reduced Motion**: Respects user's motion preferences

## 🌐 Browser Support

- Chrome/Edge: 90+
- Firefox: 88+
- Safari: 14+
- Opera: 76+

## ♿ Accessibility Features

- Keyboard navigation support
- ARIA labels on interactive elements
- Focus visible indicators
- Semantic HTML structure
- Alt text on all images
- Reduced motion support

## 🎨 Advanced Customizations

### Adding Background Music
1. Add an audio file to your project
2. Update the music toggle in `script.js`:

```javascript
const audio = new Audio('path/to/your/music.mp3');
audio.loop = true;

document.getElementById('musicToggle').addEventListener('click', function() {
    isPlaying = !isPlaying;
    if (isPlaying) {
        audio.play();
        musicText.textContent = 'On';
    } else {
        audio.pause();
        musicText.textContent = 'Music';
    }
});
```

### Custom Cursor
Uncomment the custom cursor code in `script.js` around line 286.

### Easter Egg
Try the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A

## 🐛 Troubleshooting

### Images not loading
- Check that all images are in the `/images` folder
- Verify file names match exactly (case-sensitive)
- Use a local server instead of opening HTML directly

### Animations not working
- Ensure JavaScript is enabled
- Check browser console for errors
- Try a different browser

### Layout issues on mobile
- Clear browser cache
- Test in different mobile browsers
- Check viewport meta tag is present

## 📄 License

This is a personal project. All photos and content are personal property.

## 💝 Credits

Made with endless love for Tirtha (Nandini)
Original React version converted to vanilla JavaScript
All animations and effects hand-crafted with care

## 🔧 Future Enhancements

Possible additions:
- [ ] Add actual background music player
- [ ] Create a photo upload feature
- [ ] Add a timeline slider
- [ ] Include a memory book section
- [ ] Create a video gallery
- [ ] Add social sharing with preview images
- [ ] Create a mobile app version
- [ ] Add multilingual support

## 📞 Support

For any questions or issues, please refer to this README or check the inline comments in the code files.

---

**Made with** 💖 **for Tirtha**

*"A heart that only beats for Tirtha • © Forever Yours"*#   T i r t h a  
 