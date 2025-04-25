module.exports = {
  '/': {
    changefreq: 'daily',
    priority: 1.0,
    lastmod: new Date().toISOString(),
  },
  '/about': {
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString(),
  },
  '/features': {
    changefreq: 'weekly',
    priority: 0.9,
    lastmod: new Date().toISOString(),
  },
}
