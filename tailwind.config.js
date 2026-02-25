/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-dark': '#0d0d0d',
        'cyber-darker': '#000000',
        'cyber-blue': '#00ff41',
        'cyber-cyan': '#39ff14',
        'cyber-purple': '#ff006e',
        'cyber-pink': '#ffbe0b',
        'cyber-green': '#00ff41',
        'terminal-green': '#00ff41',
        'neon-orange': '#ff6d00',
        'electric-purple': '#7209b7',
      },
      fontFamily: {
        'display': ['Space Mono', 'monospace'],
        'body': ['JetBrains Mono', 'monospace'],
        'mono': ['Courier Prime', 'monospace'],
        'terminal': ['IBM Plex Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 8s linear infinite',
        'flicker': 'flicker 0.15s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00d9ff, 0 0 10px #00d9ff' },
          '100%': { boxShadow: '0 0 10px #00d9ff, 0 0 20px #00d9ff, 0 0 30px #00d9ff' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-cyber': 'linear-gradient(135deg, #00d9ff 0%, #b444ff 100%)',
      },
    },
  },
  plugins: [],
}
