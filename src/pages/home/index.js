import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from 'react/jsx-runtime'
import { SEO } from 'src/components/seo'
import { StructuredData } from 'src/components/seo/structured-data'
import { Hero } from 'src/components/hero'
export default function Home() {
  const websiteData = {
    name: 'Nova Stack',
    description: 'A production-ready React starter template with best practices built in.',
    url: 'https://nova-stack-nine.vercel.app',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://nova-stack-nine.vercel.app/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }
  return _jsxs(_Fragment, {
    children: [
      _jsx(SEO, {
        title: 'Nova Stack - Modern React Development Stack',
        description:
          'A production-ready React starter template with best practices built in. Features lightning-fast development, type safety, and modern styling out of the box.',
        keywords: 'react,typescript,vite,tailwindcss,shadcn,development,web development,frontend,starter template',
        canonicalUrl: '/',
      }),
      _jsx(StructuredData, { type: 'WebSite', data: websiteData }),
      _jsx(Hero, {}),
    ],
  })
}
//# sourceMappingURL=index.js.map
