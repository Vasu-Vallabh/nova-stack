const { spawn } = require('child_process')
const chokidar = require('chokidar')
const debounce = require('lodash/debounce')

// Install required dependencies if not present
try {
  require('chokidar')
  require('lodash')
} catch (e) {
  console.log('Installing required dependencies...')
  spawn('npm', ['install', 'chokidar', 'lodash', '--save-dev'], { stdio: 'inherit' })
}

// Run vite dev server
const devServer = spawn('npm', ['run', 'dev'], { stdio: 'inherit' })

// Watch for changes in router.tsx and regenerate sitemap
const regenerateSitemap = debounce(() => {
  console.log('\nRegenerating sitemap...')
  spawn('npm', ['run', 'generate-sitemap'], { stdio: 'inherit' })
}, 1000)

// Watch router.tsx for changes
const watcher = chokidar.watch('src/router.tsx', {
  ignored: /(^|[\/\\])\../,
  persistent: true,
})

watcher.on('change', regenerateSitemap).on('error', (error) => console.log(`Watcher error: ${error}`))

// Cleanup on exit
process.on('SIGINT', () => {
  watcher.close()
  devServer.kill()
  process.exit()
})
