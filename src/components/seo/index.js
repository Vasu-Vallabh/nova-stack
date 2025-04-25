import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime'
import { Helmet } from 'react-helmet'
export function SEO({
  title,
  description,
  keywords,
  ogType = 'website',
  ogImage = '/landing-page.png',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  noindex = false,
}) {
  const baseUrl = 'https://nova-stack-nine.vercel.app'
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl
  return _jsxs(Helmet, {
    children: [
      _jsx('title', { children: title }),
      _jsx('meta', { name: 'description', content: description }),
      keywords && _jsx('meta', { name: 'keywords', content: keywords }),
      _jsx('meta', { name: 'robots', content: noindex ? 'noindex, nofollow' : 'index, follow' }),
      _jsx('link', { rel: 'canonical', href: fullCanonicalUrl }),
      _jsx('meta', { property: 'og:type', content: ogType }),
      _jsx('meta', { property: 'og:title', content: title }),
      _jsx('meta', { property: 'og:description', content: description }),
      _jsx('meta', { property: 'og:image', content: ogImage }),
      _jsx('meta', { property: 'og:url', content: fullCanonicalUrl }),
      _jsx('meta', { property: 'og:site_name', content: 'Nova Stack' }),
      _jsx('meta', { name: 'twitter:card', content: twitterCard }),
      _jsx('meta', { name: 'twitter:title', content: title }),
      _jsx('meta', { name: 'twitter:description', content: description }),
      _jsx('meta', { name: 'twitter:image', content: ogImage }),
      _jsx('meta', { name: 'twitter:creator', content: '@novastack' }),
      _jsx('meta', { name: 'application-name', content: 'Nova Stack' }),
      _jsx('meta', { name: 'apple-mobile-web-app-title', content: 'Nova Stack' }),
      _jsx('meta', { name: 'theme-color', content: '#4F46E5' }),
    ],
  })
}
//# sourceMappingURL=index.js.map
