import { jsx as _jsx } from 'react/jsx-runtime'
import { Helmet } from 'react-helmet'
export function StructuredData({ type, data }) {
  const jsonLD = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  }
  return _jsx(Helmet, { children: _jsx('script', { type: 'application/ld+json', children: JSON.stringify(jsonLD) }) })
}
//# sourceMappingURL=structured-data.js.map
