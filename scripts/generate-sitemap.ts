import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'
import fs from 'fs'
import path from 'path'

// Define your website URL
const WEBSITE_URL = 'https://nova-stack-nine.vercel.app'

// Define your routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
]

async function generateSitemap() {
  try {
    // Create a stream to write to
    const stream = new SitemapStream({ hostname: WEBSITE_URL })

    // Add routes to the sitemap
    return streamToPromise(Readable.from(routes).pipe(stream)).then((data) => {
      const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml')
      fs.writeFileSync(sitemapPath, data.toString())
      console.log('Sitemap generated successfully!')
    })
  } catch (error) {
    console.error('Error generating sitemap:', error)
  }
}

generateSitemap()
