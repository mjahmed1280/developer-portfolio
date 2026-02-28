# My Personal Portfolio

A clean, minimal personal portfolio built with **React + Vite + Tailwind CSS**. Dark mode by default, fully responsive, single source of truth for all content.

---
### Live Link: https://ahmed-jakaria.vercel.app/

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS v3 |
| Icons | Lucide React |
| Dark mode | Class strategy via `localStorage` |
| Deploy | (Vercel / Netlify recommended) |

---

## Project Structure

```
portfolio/
├── public/
│   ├── avatar.jpg          # Profile photo
│   ├── favicon.svg         # </> browser tab icon
│   ├── J Ahmed M2.pdf      # Resume (linked from Hero)
│   ├── wpp-logo.jpg        # Experience org logos
│   ├── gm-logo.jpg
│   └── lpu logo.png
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Fixed pill navbar, dark toggle, active section
│   │   ├── Hero.jsx        # Intro, CTAs, resume button
│   │   ├── TechStrip.jsx   # Flat devicon logo strip
│   │   ├── Experience.jsx  # Collapsible cards + org logos
│   │   ├── Projects.jsx    # 16:9 image + collapsible details
│   │   ├── Skills.jsx      # Category cards with colored chips
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   │
│   ├── data.js             # Single source of truth for all content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Global styles + custom keyframes
│
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview build locally
npm run preview
```

---

## Updating Content

All portfolio content lives in **`src/data.js`** — no need to touch component files for content changes.

### Add / edit experience
```js
// src/data.js
export const experiences = [
  {
    id: 1,
    title: 'Your Role',
    company: 'Company Name',
    logo: '/company-logo.png',   // place file in public/
    location: 'City, IN',
    period: 'Jan 2024 – Present',
    current: true,
    bullets: ['...', '...'],
  },
  // ...
];
```

### Add a project screenshot
1. Place the image in `public/` (e.g. `public/my-project.png`)
2. Set `image: '/my-project.png'` in the relevant project entry in `data.js`

### Update resume
Replace `public/J Ahmed M2.pdf` with the new file (keep the same filename), or update the href in `Hero.jsx`.

---

## Features

- **Dark mode default** — pill toggle in navbar, persisted via `localStorage`
- **Active nav highlight** — `IntersectionObserver` tracks current section
- **Collapsible experience cards** — clean header always visible, bullets expand on click
- **Collapsible project cards** — 16:9 image placeholder + show/hide details
- **Tech strip** — flat devicon logo row between Hero and Experience
- **Skills grid** — color-coded category cards with matching chip accents
- **Fully responsive** — mobile menu, fluid layout

---

## Contact

**Jakaria Ahmed** · [mjahmed1280@gmail.com](mailto:mjahmed1280@gmail.com) · [LinkedIn](https://linkedin.com/in/jakaria-ahmed08) · [GitHub](https://github.com/mjahmed1280)
