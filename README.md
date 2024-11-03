# 🌐 Simple Company Site

A basic two-page web app featuring a homepage and a contact form page.


## ✨ Features

- Homepage: Static content and navigation.
- Contact Form: Validates data on both client and server sides.
- Backend: POST API for form submission and response handling.
- Lazy Loading YouTube: Enhances performance by delaying video load until visible.
- SEO Optimization: Includes Open Graph and Twitter Card tags for social media visibility.


## 🚀 Tech Stack

| Aspect       | Technology                                  |
|--------------|--------------------------------------------|
| Frontend     | Next.js, React, Material UI                |
| Styling      | Material UI’s CSS-in-JS (sx), Global CSS   |
| Backend      | Next.js API Routes                         |
| Lazy Load    | Intersection Observer API 

## 🛠 Getting Started

### Local Setup

1. Clone the repository:

```bash
git clone https://github.com/RubyVine01/simple-company-site.git
```

2. Navigate to project directory:

```bash
cd simple-company-site
```

3. Install dependencies:

bash
```bash
npm install
```

4. Run in development mode:

```bash
npm run dev
```
5. Open your browser at http://localhost:3000.

## ☁️ Hosting on Vercel:

1. Log in to Vercel and select "Import Project."
2. Connect your GitHub repository and configure project settings.
3. Once deployed, get the site URL from Vercel.

## 🎨 Styling and Performance Strategy

### Styling

- Material UI (sx) for responsive styles based on screen size.
- CSS-in-JS to enable dynamic style changes.
- Global CSS through globals.css for base styles.

### SEO & Performance Optimizations
- Meta Tags: Open Graph and Twitter Cards for enhanced previews in social media.
- Lazy Loading YouTube: Video loads only when visible, improving load times.
- Lazy Load Components: Large components (videos, images) load as needed, boosting UX.

### Accessibility

- Heading Structure: Organized hierarchy (h1, h2, h3) for easy navigation.
- ARIA Labels: For improved screen reader support.
- Color Contrast: Ensures readability and accessibility.

## 📁 Project Structure

| Path                               | Description                   |
|------------------------------------|-------------------------------|
| `/src/app`                         | Pages & API routes            |
| `/src/components`                  | UI components                 |
| `/src/styles/globals.css`          | Global CSS styles             |
| `/src/app/api/contact/routes.ts`   | Contact form API & validation |

## 🖼 Mockups
1. [Main page](https://download.cadexchanger.com/documents/hiring/frontend/main.svg)
2. [Contact us page with form](https://download.cadexchanger.com/documents/hiring/frontend/form.svg)
3. [Contact us page after submission](https://download.cadexchanger.com/documents/hiring/frontend/response.svg)
