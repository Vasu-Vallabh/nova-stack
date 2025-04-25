const https = require('https')

const SITE_URL = 'https://nova-stack-nine.vercel.app'
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`

const searchEngines = [
  `https://www.google.com/ping?sitemap=${SITEMAP_URL}`,
  `https://www.bing.com/ping?sitemap=${SITEMAP_URL}`,
]

function pingSearchEngine(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log(`Successfully pinged ${url}`)
          resolve()
        } else {
          reject(new Error(`Failed to ping ${url}: ${res.statusCode}`))
        }
      })
      .on('error', (err) => {
        reject(new Error(`Failed to ping ${url}: ${err.message}`))
      })
  })
}

async function notifySearchEngines() {
  try {
    await Promise.all(searchEngines.map(pingSearchEngine))
    console.log('All search engines notified successfully!')
  } catch (error) {
    console.error('Error notifying search engines:', error)
    process.exit(1)
  }
}

notifySearchEngines()
