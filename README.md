# Khahlula Mbulazi

A modern, responsive web application for **Khahlula Mbulazi Private Limited**, built to showcase commercial & industrial structural engineering, construction projects, and specialized services based in Bulawayo, Zimbabwe.
🌐 **Live Website:** [khahlulambulaziconstruction.co.zw](https://khahlulambulaziconstruction.co.zw/)
---

## 🛠️ Tech Stack

* **Frontend:** React, TypeScript, Vite
* **Styling:** Tailwind CSS, Lucide Icons, Framer Motion
* **Hosting & Deployment:** Firebase Hosting
* **CI/CD Pipeline:** GitHub Actions

---

## ✨ Key Features

* **Interactive Portfolio Grid:** Showcases engineering projects (e.g., Commercial Steel Portal Frame Erection) with detailed specifications.
* **Services Breakdown:** Clear overview of commercial, industrial, and structural construction capabilities.
* **Responsive Layout:** Optimized for mobile, tablet, and desktop viewports.
* **Customer Reviews & Testimonials:** Highlighting client feedback and proven industry experience.
* **Location & Contact Details:** Integrated company address and inquiry details.

---

## 📁 Project Structure

```text
khahlulambulazi/
├── .github/workflows/       # GitHub Actions CI/CD workflows
├── public/                  # Static assets and favicon
├── src/
│   ├── components/          # Reusable UI components & section layouts
│   │   └── sections/        # Page sections (Hero, About, Services, Reviews)
│   ├── data/                # Data structures (projects, services, constants)
│   ├── pages/               # Main page routes (HomePage, AboutPage, etc.)
│   ├── App.tsx              # Application root & router configuration
│   └── main.tsx             # Application entry point
├── firebase.json            # Firebase Hosting configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite build tool configuration
