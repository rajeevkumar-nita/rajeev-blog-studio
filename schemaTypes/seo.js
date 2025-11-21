// schemas/seo.js

export default {
  name: 'seo',
  title: 'SEO & Social Sharing',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      title: 'Google Search Title (Meta Title)',
      type: 'string',
      description: 'Jo title Google par blue color mein dikhega. Example: "Amazon Clone - Full Stack Project" ya "About Rajeev Kumar"',
      validation: Rule => Rule.max(60).warning('Title zyada lamba hai! Google isse kat dega (Max 60 chars).')
    },
    {
      name: 'metaDescription',
      title: 'Short Summary (Meta Description)',
      type: 'text',
      rows: 3,
      description: 'Ye text Google par Title ke niche dikhta hai. Yahan project ka chhota sa intro likho. (Max 160 chars)',
      validation: Rule => Rule.max(160).warning('Description zyada lambi hai! (Max 160 chars).')
    },
    {
      name: 'keywords',
      title: 'Keywords / Tags',
      type: 'array',
      description: 'Keywords add karo jisse log search kar sakein. Example: "React", "Web Design", "Portfolio"',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'openGraphImage',
      title: 'Social Share Image (LinkedIn/WhatsApp Card)',
      type: 'image',
      description: 'Jab aap is page ka link kisi ko WhatsApp ya LinkedIn par bhejoge, toh ye photo dikhegi.',
      options: {
        hotspot: true
      }
    }
  ]
}