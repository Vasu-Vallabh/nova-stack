export interface RouteSEOConfig {
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
  lastmod?: string
}

export type SEOConfig = {
  [path: string]: RouteSEOConfig
}

export const routeSEOConfig: SEOConfig = {
  '/': {
    changefreq: 'daily',
    priority: 1.0,
    lastmod: new Date().toISOString(),
  },
  '/about': {
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString(),
  },
  // Add more routes as needed
}
