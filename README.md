# Kelvin Sagini - Portfolio Website

A modern, professional portfolio website built with React for Kelvin Sagini, an IT Student & Developer.

## 🚀 How to Run

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Navigate to the project directory:**
   ```bash
   cd /workspace
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   The website will automatically open at `http://localhost:3000`

   If it doesn't open automatically, navigate to:
   ```
   http://localhost:3000
   ```

### Alternative: Run in Background

If you want to run the server in the background:

```bash
npm start
```

The server will continue running in the background.

### Accessing the Website

- **Local:** http://localhost:3000
- **Public URL (if port exposed):** Use the provided public URL

## 🛠️ Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## 📁 Project Structure

```
/workspace
├── public/
│   ├── index.html
│   ├── home-pic.jpeg.png    # Background image
│   └── cert.jpg             # Certificate image
├── src/
│   ├── components/
│   │   ├── Navigation.js    # Navigation bar & sidebar
│   │   ├── Hero.js          # Hero section
│   │   ├── About.js         # About section
│   │   ├── Skills.js        # Skills section
│   │   ├── Education.js     # Education section
│   │   ├── Experience.js    # Experience section
│   │   ├── Projects.js      # Projects section
│   │   ├── Contact.js       # Contact section
│   │   └── Footer.js        # Footer
│   ├── App.js               # Main app component
│   ├── App.css              # App styles
│   ├── index.js             # Entry point
│   └── index.css            # Global styles
├── package.json
└── README.md
```

## 🎨 Features

- **Responsive Design:** Works on desktop, tablet, and mobile
- **Smooth Navigation:** Smooth scrolling to all sections
- **Modern UI:** Glassmorphism effects, gradients, and animations
- **Interactive Components:** Forms, cards, buttons with hover effects
- **Professional Layout:** Clean, organized sections with proper spacing

## 📱 Sections

1. **Hero:** Introduction with statistics and background image
2. **About:** Personal information, career objectives, and values
3. **Skills:** Technical skills with progress bars and certifications
4. **Education:** Academic background and training
5. **Experience:** Work experience and projects
6. **Projects:** Portfolio showcase with detailed project cards
7. **Contact:** Contact form and information
8. **Footer:** Quick links and social actions

## 🔧 Customization

### Changing Images
- Background image: Replace `/workspace/public/home-pic.jpeg.png`
- Certificate image: Replace `/workspace/public/cert.jpg`

### Modifying Content
- Edit component files in `/workspace/src/components/`
- Each section has its own component and styles

### Styling
- Global styles: `/workspace/src/index.css`
- Component styles: Each component has its own `.css` file

## 📦 Deployment

To deploy for production:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy the `build` folder** to your hosting service (Netlify, Vercel, GitHub Pages, etc.)

## 💡 Tips

- The development server runs on port 3000 by default
- Hot reload is enabled - changes appear automatically
- The website is fully responsive - test on different screen sizes
- All sections are accessible via smooth scrolling navigation

## 📞 Contact

For questions or support, contact Kelvin Sagini at kelvi20sagini@gmail.com