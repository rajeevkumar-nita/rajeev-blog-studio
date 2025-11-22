# ⚡ Sanity Content Studio – Backend

This repository contains the **Headless CMS (Backend)** for my personal portfolio website.  
Built with **Sanity.io**, it manages all dynamic content including blog posts, project showcases, and SEO metadata.

---

## 🚀 Live Links

- **Admin Studio (CMS):** https://rajeev-kumar-blog.sanity.studio/  
- **Frontend Website:** https://rajeev-portfolio-delta.vercel.app/

---

## ✨ Key Features

### 📝 Dynamic Content Management
Create, edit, and delete **blog posts**, **projects**, and other content in real-time.

### 🔍 Custom SEO Schema
Integrated `seo.js` schema includes:
1. Meta Titles & Descriptions  
2. Open Graph Images for Social Media  
3. Keywords and Tags

### ☁️ Cloud Hosted
Hosted on **Sanity Cloud** with production-ready setup.

### ⚡ Real-time Updates
Content changes instantly reflect on the Vercel-hosted frontend.

---

## 🛠️ Tech Stack

- **Sanity v3**
- **JavaScript (ES6+)**
- **Node.js**
- **Sanity Cloud (Deployment)**

---

## 📂 Project Structure

```text
rajeev-blog-studio/
├── schemaTypes/         # Content Schemas (The Brain 🧠)
│   ├── index.js         # Schema registry
│   ├── post.js          # Blog Post definition
│   ├── author.js        # Author details
│   ├── category.js      # Categories/Tags
│   ├── blockContent.js  # Rich Text Editor config
│   └── seo.js           # ⚡ Custom SEO Configuration
├── static/              # Static assets (Logos/Icons)
├── sanity.cli.js        # CLI Configuration
├── sanity.config.js     # Main Studio Configuration
└── package.json         # Dependencies & Scripts


---

## ⚙️ Getting Started (Local Development)

Follow the steps below to run the studio locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/rajeevkumar-nita/rajeev-blog-studio.git
cd rajeev-blog-studio

2️⃣ Install Dependencies
npm install

3️⃣ Run Development Server
npm run dev

Studio will open at:
👉 http://localhost:3333

🚀 Deployment
After making schema updates, deploy the studio to production:
npm run deploy

This updates the live instance at:
👉 rajeev-kumar-blog.sanity.studio

📝 Custom SEO Schema Implementation
 i implemented a reusable SEO object:


Fields:
metaTitle – Title for search engines (Max 60 chars)
metaDescription – Summary for search results (Max 160 chars)
openGraphImage – Image for LinkedIn/WhatsApp sharing

Usage inside post.js:
defineField({
  name: 'seo',
  title: 'SEO Settings',
  type: 'seo',
})

👤 Author
Rajeev Kumar
Portfolio: https://rajeev-portfolio-delta.vercel.app/
GitHub: https://github.com/rajeevkumar-nita
LinkedIn: https://linkedin.com/in/rajeevkumar-nita