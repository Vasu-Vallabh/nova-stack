import { Helmet } from 'react-helmet'

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

export function SEO({
  title,
  description,
  keywords,
  ogType = 'website',
  ogImage = '/landing-page.png',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  noindex = false,
}: SEOProps) {
  const baseUrl = 'https://nova-stack-nine.vercel.app'
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content="Nova Stack" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional tags */}
      <meta name="twitter:creator" content="@novastack" />
      <meta name="application-name" content="Nova Stack" />
      <meta name="apple-mobile-web-app-title" content="Nova Stack" />
      <meta name="theme-color" content="#4F46E5" />
    </Helmet>
  )
}
