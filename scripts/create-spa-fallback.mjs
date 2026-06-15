import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const distDir = resolve('dist')
const indexFile = resolve(distDir, 'index.html')
const fallbackFile = resolve(distDir, '404.html')

if (!existsSync(indexFile)) {
  throw new Error('dist/index.html was not found. Run vite build first.')
}

copyFileSync(indexFile, fallbackFile)
