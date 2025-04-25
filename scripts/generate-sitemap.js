const { SitemapStream, streamToPromise } = require('sitemap')
const { Readable } = require('stream')
const fs = require('fs')
const path = require('path')
const seoConfig = require('./seo-config.js')

// Define your website URL
const WEBSITE_URL = 'https://nova-stack-nine.vercel.app'

// Get routes from router configuration
function getRoutesFromRouter() {
  const routerPath = path.join(__dirname, '..', 'src', 'router.tsx')
  const routerContent = fs.readFileSync(routerPath, 'utf-8')

  // Parse routes array from router.tsx
  const routesMatch = routerContent.match(/routerObjects:\s*RouteObject\[\]\s*=\s*\[([\s\S]*?)\]/)
  if (!routesMatch) {
    console.warn('Could not parse routes from router.tsx, using default routes')
    return ['/']
  }

  const routesContent = routesMatch[1]
  return [...routesContent.matchAll(/path:\s*['"]([^'"]+)['"]/g)]
    .map((match) => match[1])
    .filter((path) => path !== '*' && !path.includes(':')) // Exclude dynamic and catch-all routes
}

async function generateSitemap() {
  try {
    const routes = getRoutesFromRouter()
    console.log('Found routes:', routes.join(', '))

    // Create sitemap entries with SEO configuration
    const sitemapEntries = routes.map((route) => ({
      url: route,
      ...(seoConfig[route] || {
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      }),
    }))

    // Create a stream to write to
    const stream = new SitemapStream({ hostname: WEBSITE_URL })

    // Add routes to the sitemap
    return streamToPromise(Readable.from(sitemapEntries).pipe(stream)).then((data) => {
      const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml')
      fs.writeFileSync(sitemapPath, data.toString())
      console.log('Sitemap generated successfully!')
    })
  } catch (error) {
    console.error('Error generating sitemap:', error)
    process.exit(1)
  }
}

generateSitemap()
