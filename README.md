⚡ Sanity Content Studio - Backend
This repository contains the Headless CMS (Backend) for my personal portfolio website. Built with Sanity.io, it manages all dynamic content including blog posts, project showcases, and SEO metadata.

🚀 Live Links
Admin Studio (CMS): https://rajeev-kumar-blog.sanity.studio/
Frontend Website: https://rajeev-portfolio-delta.vercel.app/

✨ Key Features
📝 Dynamic Content Management: Create, edit, and delete blog posts and projects in real-time.
🔍 Custom SEO Schema: Integrated seo.js schema to manage:
1. Meta Titles & Descriptions for Google Search.
2. Open Graph Images for Social Media (LinkedIn/WhatsApp) previews.
3. Keywords and Tags.

☁️ Cloud Hosted: The studio is deployed on Sanity's managed cloud environment.
⚡ Real-time Updates: Content updates are instantly reflected on the frontend (Vercel).

🛠️ Tech Stack
Core: Sanity v3
Language: JavaScript (ES6+)
Environment: Node.js
Deployment: Sanity Cloud

📂 Project Structure

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


⚙️ Getting Started (Local Development)
Follow these steps to run the studio locally on your machine:

1. Clone the Repository

git clone [https://github.com/rajeevkumar-nita/rajeev-blog-studio.git](https://github.com/rajeevkumar-nita/rajeev-blog-studio.git)
cd rajeev-blog-studio

2. Install Dependencies
npm install

3. Run Development Server
npm run dev

The studio will open at http://localhost:3333.

🚀 Deployment

After making changes to the schemas (e.g., adding new fields), deploy the studio to production using:

npm run deploy

This updates the live instance at rajeev-kumar-blog.sanity.studio.

📝 Custom SEO Schema Implementation
I have implemented a custom object type seo to handle metadata dynamically.

Fields:
metaTitle: Title for search engines (Max 60 chars).
metaDescription: Summary for search results (Max 160 chars).
openGraphImage: Custom image for social media sharing cards.

Usage in post.js:
defineField({
  name: 'seo',
  title: 'SEO Settings',
  type: 'seo',
})


👤 Author
Rajeev Kumar
Portfolio: https://rajeev-portfolio-delta.vercel.app/
GitHub: https://github.com/rajeevkumar-nita
Linkedin: linkedin.com/in/rajeevkumar-nita