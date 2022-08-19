module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,jsx}",
    ],
    
    theme: {
        colors: {
            // Configure your color palette here
            'back': '#060E29',
            'button': '#0772FF',
        },
        backgroundImage: {
        'hero-pattern': "url('/assets/gb-girl.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
        
    }
    
};