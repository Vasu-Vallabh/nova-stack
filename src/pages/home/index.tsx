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

  return (
    <>
      <SEO
        title="Nova Stack - Modern React Development Stack"
        description="A production-ready React starter template with best practices built in. Features lightning-fast development, type safety, and modern styling out of the box."
        keywords="react,typescript,vite,tailwindcss,shadcn,development,web development,frontend,starter template"
        canonicalUrl="/"
      />
      <StructuredData type="WebSite" data={websiteData} />
      <Hero />
    </>
  )
}
