import { Helmet } from 'react-helmet'

type JsonLdData = {
  name?: string
  description?: string
  url?: string
  image?: string
  potentialAction?: {
    '@type': string
    target: string
    'query-input'?: string
  }
  [key: string]: unknown
}

interface StructuredDataProps {
  type: 'WebSite' | 'Organization' | 'Article'
  data: JsonLdData
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const jsonLD = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLD)}</script>
    </Helmet>
  )
}
