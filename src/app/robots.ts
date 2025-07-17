import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
          '/politica-de-confidentialitate', 
          '/termeni-si-conditii',
          '/politica-cookie'
      ],
    },
    sitemap: 'https://digital-online.ro/sitemap.xml',
  }
}
