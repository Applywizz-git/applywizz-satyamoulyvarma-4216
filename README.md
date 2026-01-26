
This repository contains a fully responsive and visually immersive portfolio website for **Naga Venkata**. The site is designed with modern aesthetics, smooth animations, and a clean UI to present his professional profile, skills, and résumé as a Business Analyst.

## Features

- **Visually Stunning Interface** built using **React** and **Framer Motion** for a dynamic and engaging user experience.
- **Glassmorphic Design** with vibrant gradients and animated backgrounds.
- **Business Analyst Profile** showcasing 4+ years of experience in healthcare, banking, fintech, and enterprise operations.
- **Skills Dashboard** with categorized icons for Analytics & BI, Databases, Business Analysis, and Agile methodologies.
- **Experience Timeline** highlighting roles at Providence Health Plan, PNC Bank, I-Soft Corp, and Adani.
- **Projects Gallery** featuring Healthcare HEDIS Analytics and Enterprise Payments Operations Hub.
- **Education & Certifications** showcasing MS in Business Analytics and various industry-standard certifications.
- **Contact Module** for direct outreach via email and LinkedIn.
- **Light/Dark mode toggle** for personalized viewing preferences.
- **Fully responsive layout** optimized for all devices.

## Technologies Used

- **React** – Frontend framework.
- **Three.js** – Used for 3D models, animations and rendering.
- **React Icons** – For technology and UI icons.
- **Styled Components / Tailwind CSS** – For styling (based on your implementation choice).
- **EmailJS** or similar – Optional backend-less email handling for the contact form.

## Getting Started

Follow the steps below to run the project locally.

### Prerequisites

Ensure you have installed:

- **Node.js 16+**
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
   ```

2. Install project dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

3. Start the local development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

   The site will automatically reload as you make changes.

### Production Build

To generate an optimized production build:

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

The production server will be available at:

```
http://localhost:3000
```

## Customization

You can personalize the site with your own content:

- **Profile & Content**  
  Edit personal details, experience, skills and project data in the designated content files (e.g., `data.js`, `constants.js`, or `content.json`).

- **3D Components**  
  Replace existing 3D models or animations by updating files in the `components/ThreeD` directory. Ensure the model format is supported by Three.js.

- **Themes**  
  Modify theme colours and variables to customize light and dark mode.

- **Contact Form**  
  Configure EmailJS or your preferred email service by updating environment variables and the Contact component.



