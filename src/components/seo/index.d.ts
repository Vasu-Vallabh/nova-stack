interface SEOProps {
  title: string
  description: string
  keywords?: string
  ogType?: string
  ogImage?: string
  twitterCard?: string
  canonicalUrl?: string
  noindex?: boolean
}
export declare function SEO({
  title,
  description,
  keywords,
  ogType,
  ogImage,
  twitterCard,
  canonicalUrl,
  noindex,
}: SEOProps): import('react/jsx-runtime').JSX.Element
export {}
