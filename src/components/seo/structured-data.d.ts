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
export declare function StructuredData({ type, data }: StructuredDataProps): import('react/jsx-runtime').JSX.Element
export {}
