import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://digital-online.ro'

  const mainRoutes = [
    '/',
    '/preturi-site',
    '/promovare-online',
    '/portofoliu',
    '/faq',
    '/contact',
  ]

  const mainSitemap = mainRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '/' ? 1 : 0.8,
  }));

  return [...mainSitemap];
}
