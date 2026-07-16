# Aditya Singh | Portfolio Website

A premium, highly interactive portfolio website for Aditya Singh, showcasing skills and experience as an AI/ML Engineer & Full-Stack Developer. Built using React, Vite, Tailwind CSS, and Framer Motion.

---

## 🚀 Tech Stack

* **Core**: React 18, Vite (for lightning-fast building & Hot Module Replacement)
* **Styling**: Tailwind CSS (modern, utility-first styling)
* **Animations**: Framer Motion (premium micro-interactions, spring physics, and scroll triggers)
* **Icons**: Lucide React
* **Data-Driven**: Content orchestrated dynamically via JSON configurations

---

## ✨ Key Features

1. **Premium Dark Mode & Glassmorphism**: Tailored, curated HSL color palette with translucent card designs, glowing ambient rings, and clean grid backgrounds.
2. **Interactive Hero Section**: Displays a responsive profile photo cropped in an Apple-style modern squircle with an outer glowing ring, a hover-zoom effect, load-in animations, and floating active status badges.
3. **Timeline Experience**: Smooth timeline layout showcasing internships, role achievements, duration, and details with custom entry animations.
4. **Academic Education**: Clean, glowing card layout displaying B.Tech CSE (AI & ML) at K.R. Mangalam University, status indicator ('Currently Pursuing'), and expected graduation in July 2027.
5. **Interactive Skills Grid**: Grouped skill categories where tapping individual skills filters corresponding projects. Includes touch-responsive behavior to prevent "sticky" hover highlights on mobile.
6. **Dynamic Projects Grid**: Allows users to filter featured projects by tag. Framer Motion handles tag filtering with snappy transitions.
7. **SEO & Link Sharing Ready**: Complete metadata tags, semantic HTML headers, custom Open Graph elements (`og:title`, `og:description`, `og:type`), and a custom branding monogram favicon (`AS`) for rich link previews on LinkedIn, WhatsApp, and Twitter/X.
8. **Performance Audited**: All Framer Motion animations are fully optimized for mobile devices. Using media query checks, spring animations automatically fallback to GPU-accelerated ease transitions, layout calculations are bypassed during mobile grid filtering, and translate distances are halved to eliminate frame drops.
9. **Automated Asset Management**: Integrates a custom Vite compiler hook (`copyAssetsPlugin` in `vite.config.js`) that automatically copies files like `resume.pdf` and `profile.jpg` from source caches to the `public/` folder on server start or build.

---

## 🗺️ Website Sections

The portfolio is structured in the following order:
1. **Hero** — Introduces name, title, and social links with the interactive profile picture.
2. **About** — Narrative bio with key academic/tech stats.
3. **Experience** — Timeline of machine learning and software engineering roles.
4. **Education** — Highlight of B.Tech CSE (AI & ML) degree at K.R. Mangalam University.
5. **Skills** — Categorized stack chips that double as filtering controls.
6. **Projects** — Featured project grid with responsive tag filtering.
7. **Certifications** — Professional courses and developer credentials.
8. **Contact** — Actionable messaging form to get in touch.

---

## 📂 Directory Structure

```text
├── public/                 # Static assets (Favicon, Profile Image, PDF Resume)
├── src/
│   ├── components/         # Reusable React components
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx   # Academic card section
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Projects.jsx
│   │   └── SkillChip.jsx
│   ├── data/
│   │   └── profileData.json # Core data source for all site content
│   ├── App.jsx             # Main App component hosting sections
│   ├── index.css           # Global custom classes, scrollbars, and Tailwind base layers
│   └── main.jsx            # DOM mount entrypoint
├── index.html              # Main HTML skeleton (SEO, Fonts, Viewport settings)
├── package.json            # Node project configuration and dependencies
├── vite.config.js          # Vite compiler config & copy asset plugins
└── tailwind.config.js      # Tailwind style themes and utilities
```

---

## 🛠️ Setup & Local Development

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Installation
Clone the repository, navigate to the folder, and install all dependencies:
```bash
npm install
```

### 3. Run Development Server
Start the local server. The custom asset plugin will run and ensure your resume and profile picture copy over automatically:
```bash
npm run dev
```
Open `http://localhost:3000` (or the console's output port) in your web browser.

### 4. Build for Production
To bundle and optimize the application for static hosting:
```bash
npm run build
```

---

## ✍️ Customizing Content

All site text, experience points, project listings, tags, links, and credentials are read directly from `src/data/profileData.json`. 

To update the website's content, open [profileData.json](src/data/profileData.json) and modify:
* `"personal"`: Name, Title, Subtitle, Location, and Social media URLs.
* `"about"`: Text summary of credentials.
* `"experience"`: Work timeline items (Company, Role, Period, Duration, Bullet details).
* `"education"`: Academic credentials (Institution, Degree, Period, Status).
* `"skills"`: Categories and arrays of skills.
* `"projects"`: Project lists, descriptions, tech tags, GitHub links, and Demo links.
* `"certifications"`: Professional courses and credentials.
