# E-commerce Platform Landing Page 🛍️

Live Demo: [https://imperial-gate-craft.vercel.app](https://imperial-gate-craft.vercel.app)

This project is a modern e-commerce landing page built with Next.js, designed to showcase products and provide a seamless user experience. It features a hero section with a dynamic image slider, a product listing to display various categories, a benefits section highlighting key advantages, a video section for engaging content, and floating action buttons for easy contact. The application also includes a responsive navigation bar that hides on scroll down and reappears on scroll up.

## 🚀 Features

- **Dynamic Hero Section:** Showcases key information with a captivating image slider.
- **Product Listing:** Displays product categories with optimized images and hover effects.
- **Benefits Section:** Highlights the key advantages of the products or services.
- **Engaging Video Section:** Includes a lazy-loaded video with play/pause and mute/unmute controls.
- **Floating Action Buttons:** Provides easy access to WhatsApp chat and an enquiry form.
- **Responsive Navbar:** Navigation bar with mega menu, hides on scroll down, and reappears on scroll up.
- **Optimized Images:** Utilizes `next/image` for optimized image loading and display.
- **Lazy Loading:** Implements lazy loading for the video section to improve performance.
- **React Compiler:** Enabled for optimized React components at compile time.

## 🛠️ Tech Stack

- **Frontend:**
  - React
  - Next.js
  - Tailwind CSS
  - Swiper.js
- **Styling:**
  - Tailwind CSS
  - Global CSS
- **Fonts:**
  - Google Fonts (Playfair Display, Fraunces, IBM Plex Sans, Nunito)
- **Icons:**
  - React Icons (Font Awesome)
- **Other:**
  - `next/image`
  - `next/font/google`

## 📦 Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone <repository_url>
    cd <project_directory>
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running Locally

1. Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## 💻 Usage

The application is designed to be a landing page for an e-commerce platform. You can customize the content by modifying the components in the `app/components` directory.

- **Hero Section:** Update the `slides` array in `app/components/HeroSection.jsx` to change the slider content.
- **Product Listing:** Modify the `categories` array in `app/components/ProductListing.jsx` to add or remove product categories.
- **Benefits Section:** Customize the icons, titles, and descriptions in `app/components/BenefitsSection.jsx`.
- **Video Section:** Replace the video source in `app/components/VideoSection.jsx` with your desired video.
- **Floating Buttons:** Update the WhatsApp number and enquiry form functionality in `app/components/FloatingButtons.jsx`.
- **Navbar:** Modify the navigation links and mega menu content in `app/components/Navbar.jsx`.

## 📂 Project Structure

```plane text
├── app
│   ├── components
│   │   ├── BenefitsSection.jsx
│   │   ├── FloatingButtons.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductListing.jsx
│   │   ├── VideoSection.jsx
│   │   └── ...
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── next.config.mjs
├── package.json
├── README.md
└── ...
```

## 📸 Screenshots

## 📝 License

This project is licensed under the [MIT License](LICENSE).
