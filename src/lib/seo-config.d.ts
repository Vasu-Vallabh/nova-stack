export interface RouteSEOConfig {
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
  lastmod?: string
}
export type SEOConfig = {
  [path: string]: RouteSEOConfig
}
export declare const routeSEOConfig: SEOConfig
