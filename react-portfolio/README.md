# Modern React Portfolio - Gopal Kumar

A modern, responsive portfolio website built with React, TypeScript, and Framer Motion.

## Features

- 🎨 Modern UI/UX design with smooth animations
- 📱 Fully responsive across all devices
- 🌙 Dark/Light theme toggle
- 🚀 Fast performance with React 18
- 📄 Separate pages for different sections
- 🎭 Framer Motion animations
- 💼 Professional project showcase
- 🏆 Certifications display
- 📧 Contact form with validation

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: CSS3 with CSS Variables
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Create React App

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   └── Navbar.css
├── pages/
│   ├── Home.tsx & Home.css
│   ├── About.tsx & About.css
│   ├── Projects.tsx & Projects.css
│   ├── Skills.tsx & Skills.css
│   ├── Certifications.tsx & Certifications.css
│   └── Contact.tsx & Contact.css
├── App.tsx
├── App.css
└── index.tsx
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd react-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

## Customization

### Theme Colors
Update CSS variables in `src/App.css`:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #ff6b6b;
}
```

### Personal Information
Update the content in each page component:
- `src/pages/Home.tsx` - Hero section and introduction
- `src/pages/About.tsx` - Personal information and education
- `src/pages/Projects.tsx` - Project portfolio
- `src/pages/Skills.tsx` - Technical skills
- `src/pages/Certifications.tsx` - Certificates and achievements
- `src/pages/Contact.tsx` - Contact information

### Images
Place your images in the `public/` directory and update the image paths in the components.

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Or connect your GitHub repository to Netlify for automatic deployments

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## Performance Features

- Lazy loading for images
- Optimized animations with Framer Motion
- CSS-in-JS avoided for better performance
- Responsive images and modern CSS
- Minimal bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Gopal Kumar - [gopal.kumar@example.com](mailto:gopal.kumar@example.com)

Project Link: [https://github.com/gopal974/portfolio](https://github.com/gopal974/portfolio)