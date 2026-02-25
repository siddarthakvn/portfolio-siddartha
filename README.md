<<<<<<< HEAD
# portfolio-siddartha
=======
# KVN Sai Siddartha - Portfolio Website

A premium, futuristic portfolio website showcasing embedded systems, robotics, and IoT projects with cinematic animations and motion design.

## 🚀 Features

- **Advanced Animations**: Powered by Framer Motion for smooth, cinematic transitions
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Dark Futuristic Theme**: Robotics control panel aesthetic with electric blue accents
- **Interactive Components**: 3D tilt effects, animated timelines, and smooth scrolling
- **Performance Optimized**: Lazy loading, code splitting, and 60fps animations
- **SEO Ready**: Meta tags, semantic HTML, and optimized structure

## 🛠️ Tech Stack

- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animation library
- **React Icons** - Icon library
- **FormSubmit** - Contact form backend

## 📦 Installation

1. **Clone or extract the portfolio folder**
   ```bash
   cd portfolio-siddartha
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   The site will open at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🌐 Deployment to Netlify

### Method 1: Git-based Deployment (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Netlify**
   - Go to [netlify.com](https://www.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - **Build settings** (should auto-detect):
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

### Method 2: Drag & Drop Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag the `dist` folder onto the page
   - Your site will be live instantly!

### Method 3: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build and deploy**
   ```bash
   npm run build
   netlify deploy --prod
   ```

## 🎨 Customization

### Update Personal Information
Edit `src/data/portfolio.js` to update:
- Personal info (name, email, phone)
- Experience details
- Projects
- Skills
- Education
- Achievements

### Modify Colors
Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  'cyber-dark': '#0a0e1a',
  'cyber-blue': '#00d9ff',
  'cyber-cyan': '#00fff9',
  // Add your colors...
}
```

### Adjust Animations
Modify animation timing in `src/index.css` or component files:
```css
:root {
  --scan-speed: 8s; /* Adjust scan line speed */
}
```

## 📁 Project Structure

```
portfolio-siddartha/
├── src/
│   ├── components/
│   │   ├── AnimatedBackground.jsx  # Particle & grid effects
│   │   ├── Navbar.jsx             # Navigation with smooth scroll
│   │   ├── Hero.jsx               # Landing section with typing effect
│   │   ├── About.jsx              # Education & achievements
│   │   ├── Experience.jsx         # Timeline with animations
│   │   ├── Projects.jsx           # Project cards with 3D effects
│   │   ├── Skills.jsx             # Animated skill bars
│   │   ├── Contact.jsx            # Contact form & info
│   │   └── Footer.jsx             # Footer with links
│   ├── data/
│   │   └── portfolio.js           # All content data
│   ├── App.jsx                    # Main app component
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles
├── public/                        # Static assets
├── index.html                     # HTML template
├── package.json                   # Dependencies
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind configuration
├── postcss.config.js              # PostCSS configuration
├── netlify.toml                   # Netlify configuration
└── README.md                      # This file
```

## 🎯 Key Features Breakdown

### Hero Section
- Letter-by-letter typing animation
- Animated role rotation
- Glowing pulse effects
- Floating stat cards

### Experience Timeline
- Animated vertical line drawing
- Staggered entry animations
- Interactive hover effects
- Technology tags

### Projects Section
- 3D tilt on hover
- Category filtering
- Expandable modals
- Smooth transitions

### Skills Section
- Animated progress bars
- Category grouping
- Icon animations
- Hover micro-interactions

### Contact Form
- FormSubmit.co integration
- Form validation
- Animated inputs
- Success feedback

## 🔧 Environment Variables

No environment variables needed! The contact form uses FormSubmit.co which works with your email directly.

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Tips

1. **Images**: Add optimized images to `/public` folder
2. **Fonts**: Uses Google Fonts with preconnect for faster loading
3. **Code Splitting**: Vite automatically splits vendor code
4. **Animations**: Uses GPU-accelerated transforms
5. **Build Size**: Production build is optimized and minified

## 🐛 Troubleshooting

**Issue: Animations not working smoothly**
- Check if `prefers-reduced-motion` is enabled in OS settings
- Try a different browser
- Clear browser cache

**Issue: Contact form not sending**
- Verify email in `src/data/portfolio.js`
- Check FormSubmit.co configuration
- Look for console errors

**Issue: Build fails**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Ensure Node.js version is 16+

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Support

For issues or questions:
- Email: siddarthakvn@gmail.com
- GitHub: [Your GitHub Profile]

---

**Built with** ⚡ **by KVN Sai Siddartha**

*Making autonomous systems accessible to everyone*
>>>>>>> 193547f (Initial portfolio deploy)
