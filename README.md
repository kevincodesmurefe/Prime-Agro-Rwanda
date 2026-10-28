# Prime Agro Rwanda Website

A responsive single-page website for **Prime Agro Rwanda**, a pig farm in Muyumbu, Rwamagana District, Rwanda. The site introduces the farm, shows what it does, lets visitors request a farm visit, and shares contact details.

> Rooted in Rwanda. Growing with purpose.

## Features

- Sticky navigation bar with a mobile menu
- Hero section with calls to action (Request Visit, Contact us)
- About section introducing the farm
- "What we do" cards: Pig Breeding, Pig Rearing, Pigs & Piglets for Sale
- "Book a Visit" form with built-in rules:
  - Visits must be booked at least 5 days ahead
  - Only Wednesdays and Saturdays are accepted
  - Groups of up to 50 visitors
- Photo gallery
- Footer with quick links and contact details
- Fully responsive (mobile, tablet, desktop)

## Tech Stack

- [React](https://react.dev/) with TypeScript
- [Tailwind CSS](https://tailwindcss.com/) for styling

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Visit.tsx
│   ├── Gallery.tsx
│   └── Footer.tsx
└── App.tsx
public/
└── images/
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd <your-project-folder>

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open the local address shown in your terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

The production files are generated in the build output folder (usually `dist/`).

## Images

Place all images in `public/images/`. The site expects these files:

| File | Used in |
| --- | --- |
| `hero.jfif` | Hero background and Visit form background |
| `download.jpg` | Decorative line pattern (navbar, About, buttons) |
| `image.jfif` | About section photo |
| `service-breeding.jpg` | Services card 01 |
| `service-rearing.jpg` | Services card 02 |
| `service-sale.jpg` | Services card 03 |
| `gallery-1.jpg` | Gallery: Built on Care and Dedication |
| `gallery-2.jpg` | Gallery: A Strong Start for Every Piglet |

To use different file names, update the paths inside the matching component.

## Customization

- **Contact details:** edit the phone number, email, and address in `Footer.tsx`. The phone number is currently a placeholder.
- **Visit rules:** the 5-day notice, allowed days, and group size limit live in `Visit.tsx`.
- **Colors:** the site uses Tailwind's green palette (mainly `green-800`). Search and replace `green-` classes to change the theme.
- **Text and sections:** all copy is written directly in each component.

## Visit Form

The form currently validates input and shows a confirmation message, but it **does not send the request anywhere yet**. Before going live, connect it to a backend or a form service, such as:

- Your own API
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)

Look for the `TODO` comment in `Visit.tsx` for the exact place to add this.

## Deployment

The site is static, so it can be hosted on any static hosting service, such as Vercel, Netlify, or GitHub Pages. Build the project with `npm run build` and deploy the output folder.

## Contact

**Prime Agro Rwanda**
Muyumbu, Rwamagana, Rwanda
primeagrorwanda@gmail.com

## License

© 2026 Prime Agro Rwanda. All rights reserved.