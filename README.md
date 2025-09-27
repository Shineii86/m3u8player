# AniStream - Modern M3U8 Player

<div align="center">

![AniStream Banner](https://img.shields.io/badge/AniStream-M3U8%20Player-purple?style=for-the-badge&logo=stream&logoColor=white)
![Version](https://img.shields.io/badge/Version-2.0.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

*A sleek, modern M3U8 streaming player with beautiful UI and smooth performance*

[![Live Demo](https://img.shields.io/badge/Live-Demo-8B5CF6?style=for-the-badge&logo=web&logoColor=white)](https://shineii86.github.io/AniStream/)
[![GitHub Stars](https://img.shields.io/github/stars/Shineii86/AniStream?style=for-the-badge&logo=github&color=yellow)](https://github.com/Shineii86/AniStream/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/Shineii86/AniStream?style=for-the-badge&logo=github&color=orange)](https://github.com/Shineii86/AniStream/issues)

![Repo Size](https://img.shields.io/github/repo-size/Shineii86/AniStream?style=for-the-badge) [![GitHub Stars](https://img.shields.io/github/stars/Shineii86/AniStream?style=for-the-badge)](https://github.com/Shineii86/AniStream/stargazers) [![GitHub Forks](https://img.shields.io/github/forks/Shineii86/AniStream?style=for-the-badge)](https://github.com/Shineii86/AniStream/fork)

</div>

## ✨ Features

| Feature | Description | Emoji |
|---------|-------------|--------|
| **Ad-Free Streaming** | Enjoy content without interruptions | 🚫 |
| **Modern UI/UX** | Clean, minimalist design with smooth animations | 🎨 |
| **Particle Background** | Interactive particle effects for immersive experience | ✨ |
| **Cross-Platform** | Works on desktop, tablet, and mobile | 📱 |
| **Fast Loading** | Optimized for quick streaming performance | ⚡ |
| **Easy to Use** | Simple interface - just paste and play | 🎯 |

## 🚀 Quick Start

### Method 1: Direct Usage
```bash
# Simply visit the live demo
https://shineii86.github.io/AniStream/
```

### Method 2: Local Deployment
```bash
# Clone the repository
git clone https://github.com/Shineii86/AniStream.git

# Navigate to directory
cd AniStream

# Open index.html in your browser
# That's it! No build process required
```

## 🎮 How to Use

1. **Open the Player**: Visit the [live demo](https://shineii86.github.io/AniStream/) or open `index.html`
2. **Paste M3U8 URL**: Copy your M3U8 stream URL
3. **Click Stream Now**: The player will load your content instantly
4. **Enjoy**: Watch your stream with full controls

```javascript
// Example M3U8 URL format
https://example.com/stream/playlist.m3u8
```

## 🛠️ Customization

### Color Scheme
Edit the CSS variables in `:root` section:

```css
:root {
    --primary: #8B5CF6;      /* Main purple color */
    --primary-dark: #7C3AED; /* Darker purple */
    --dark: #0F0F0F;         /* Background color */
    --light: #F5F5F5;        /* Text color */
    /* Add your custom colors here */
}
```

### Particle Effects
Customize the particle background in the JavaScript section:

```javascript
particlesJS('particles-js', {
    particles: {
        number: { value: 80 },        // Number of particles
        color: { value: "#8B5CF6" },  // Particle color
        size: { value: 3 },           // Particle size
        // More customization options...
    }
});
```

### Player Settings
Modify player behavior in the script section:

```javascript
// Auto-play configuration
video.play().catch(e => console.log('Autoplay prevented:', e));

// Error handling
video.addEventListener('error', function() {
    alert('Error loading video. Please check the URL.');
});
```

## 📁 Project Structure

```
AniStream/
├── index.html             # Main application file
├── README.md              # Project documentation
└── assets/                # Optional assets folder
    ├── images/            # Screenshots and logos
    ├── css/               # Additional stylesheets
    └── js/                # Additional scripts
```

## 🌐 Browser Support

| Browser | Support | Notes |
|---------|---------|--------|
| Chrome | ✅ Full | Recommended |
| Firefox | ✅ Full | Optimized |
| Safari | ✅ Full | iOS compatible |
| Edge | ✅ Full | Chromium-based |
| Mobile Browsers | ✅ Full | Responsive design |

## 🔧 Technical Details

### Built With
- **HTML5** - Modern semantic markup
- **CSS3** - Advanced styling with variables
- **JavaScript** - Interactive functionality
- **Particles.js** - Background animation
- **Font Awesome** - Beautiful icons
- **Google Fonts** - Typography

### Key Technologies
- **M3U8 Playback** - Native HTML5 video support
- **Responsive Design** - Mobile-first approach
- **CSS Grid & Flexbox** - Modern layouts
- **ES6 JavaScript** - Modern syntax

## 🎨 Themes

AniStream supports easy theme customization. Here are some pre-built themes:

### Default Theme (Purple)
```css
--primary: #8B5CF6;
--primary-dark: #7C3AED;
```

### Ocean Theme
```css
--primary: #3B82F6;
--primary-dark: #2563EB;
```

### Forest Theme
```css
--primary: #10B981;
--primary-dark: #059669;
```

### Sunset Theme
```css
--primary: #F59E0B;
--primary-dark: #D97706;
```

## 📱 Mobile Experience

AniStream is fully optimized for mobile devices:
- Touch-friendly controls
- Responsive video player
- Optimized performance
- Smooth scrolling

## 🔒 Privacy & Security

- No tracking or analytics
- All processing happens locally
- No data sent to external servers
- Open source and transparent

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Setup
```bash
# Fork and clone the repository
git clone https://github.com/your-username/AniStream.git

# Make your changes and test locally
# Ensure the player works across different browsers

# Submit your pull request
```

## 🐛 Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Video not loading | Check M3U8 URL validity |
| Audio but no video | Ensure codec compatibility |
| Mobile playback issues | Check network connectivity |
| Particles not showing | Enable JavaScript |

### Debug Mode
Add this to the console for debugging:
```javascript
// Enable debug logging
localStorage.setItem('debug', 'true');
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Shinei Nouzen** - Project creator and maintainer
- **Particles.js** - Beautiful background effects
- **Font Awesome** - Icon library
- **Google Fonts** - Typography
- **Contributors** - Everyone who helped improve AniStream

## 📞 Support

If you need help or have questions:

- 🐛 **Issues**: [GitHub Issues](https://github.com/Shineii86/AniStream/issues)
- 💡 **Suggestions**: Open a feature request

---

## 💕 Loved My Work?

🚨 [Follow me on GitHub](https://github.com/Shineii86)

⭐ [Give a star to this project](https://github.com/Shineii86/AniStream)

<div align="center">

<a href="https://github.com/Shineii86/AniList">
<img src="https://github.com/Shineii86/AniPay/blob/main/Source/Banner6.png" alt="Banner">
</a>
  
  *For inquiries or collaborations*
     
[![Telegram Badge](https://img.shields.io/badge/-Telegram-2CA5E0?style=flat&logo=Telegram&logoColor=white)](https://telegram.me/Shineii86 "Contact on Telegram")
[![Instagram Badge](https://img.shields.io/badge/-Instagram-C13584?style=flat&logo=Instagram&logoColor=white)](https://instagram.com/ikx7.a "Follow on Instagram")
[![Pinterest Badge](https://img.shields.io/badge/-Pinterest-E60023?style=flat&logo=Pinterest&logoColor=white)](https://pinterest.com/ikx7a "Follow on Pinterest")
[![Gmail Badge](https://img.shields.io/badge/-Gmail-D14836?style=flat&logo=Gmail&logoColor=white)](mailto:ikx7a@hotmail.com "Send an Email")

  <sup><b>Copyright © 2025 <a href="https://telegram.me/Shineii86">Shinei Nouzen</a> All Rights Reserved</b></sup>

![Last Commit](https://img.shields.io/github/last-commit/Shineii86/AniStream?style=for-the-badge)

</div>
