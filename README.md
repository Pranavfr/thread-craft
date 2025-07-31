# ThreadCraft 🚀

A stunning, mobile-first AI-powered Tweet Thread Generator that turns your thoughts into viral tweet threads in seconds.

## ✨ Features

- **🎨 Premium UI/UX**: Glassmorphic design with smooth animations and micro-interactions
- **📱 Mobile-First**: Optimized for mobile with swipe gestures and fluid cards
- **🌙 Dark/Light Mode**: Beautiful theme toggle with smooth transitions
- **🤖 AI-Powered**: Integrated with Google Gemini API for intelligent thread generation
- **📊 Multiple Tones**: Choose from Casual, Funny, Educational, or Viral tones
- **📏 Customizable Length**: Generate 5, 10, or 15 tweet threads
- **📋 One-Click Copy**: Copy individual tweets to clipboard
- **🐦 Direct Tweet**: Tweet directly from the app with pre-filled content
- **🎯 Real Tweet Preview**: Tweets look like real Twitter posts with engagement metrics

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ThreadCraft
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Gemini API key to `.env.local`:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion for smooth interactions
- **AI**: Google Gemini API for thread generation
- **Icons**: Lucide React for beautiful icons
- **Deployment**: Vercel (recommended)

## 🎨 Design Features

### Mobile-First Design
- Responsive layout that works perfectly on all devices
- Touch-friendly interface with proper spacing
- Swipe gestures for mobile navigation
- Optimized for thumb navigation

### Premium UI Elements
- **Glassmorphic Effects**: Backdrop blur with transparency
- **Neumorphic Inputs**: Soft, modern input fields
- **Gradient Buttons**: Vibrant CTAs with hover effects
- **Floating Icons**: Animated decorative elements
- **Smooth Transitions**: 60fps animations throughout

### Tweet Preview Cards
- Realistic Twitter-like appearance
- Profile avatars with numbered indicators
- Engagement metrics (likes, retweets, replies)
- Copy and Tweet buttons for each tweet

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Your Google Gemini API key | Yes |

### Customization

You can customize the app by modifying:

- **Colors**: Edit `tailwind.config.js` for brand colors
- **Animations**: Adjust timing in `globals.css`
- **Tones**: Add new tones in `ThreadGenerator.tsx`
- **Lengths**: Modify tweet count options

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository**
   ```bash
   vercel --prod
   ```

2. **Add environment variables**
   - Go to your Vercel dashboard
   - Add `GEMINI_API_KEY` to environment variables

3. **Deploy**
   Your app will be live at `https://your-app.vercel.app`

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- **Netlify**: Use `next build && next export`
- **Railway**: Direct deployment from GitHub
- **DigitalOcean App Platform**: One-click deployment

## 📱 Mobile Features

- **Touch Optimized**: Large touch targets and proper spacing
- **Swipe Navigation**: Smooth swipe between sections
- **Responsive Cards**: Tweet cards adapt to screen size
- **Mobile-First Typography**: Readable text at all sizes
- **Gesture Support**: Native mobile interactions

## 🎯 Usage

1. **Enter Your Topic**: Type any topic, URL, or idea
2. **Choose Tone**: Select from Casual, Funny, Educational, or Viral
3. **Set Length**: Pick 5, 10, or 15 tweets
4. **Generate**: Click the button and watch AI work its magic
5. **Share**: Copy individual tweets or tweet them directly

## 🔮 Future Features

- [ ] Thread templates and presets
- [ ] Advanced tone customization
- [ ] Thread analytics and performance tracking
- [ ] Collaborative thread editing
- [ ] Integration with Twitter API for direct posting
- [ ] Thread scheduling and automation
- [ ] Multi-language support
- [ ] Advanced AI models and fine-tuning

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini API** for powerful AI capabilities
- **Framer Motion** for beautiful animations
- **Tailwind CSS** for utility-first styling
- **Lucide React** for beautiful icons
- **Next.js** for the amazing framework

---

Made with ❤️ by ThreadCraft Team 