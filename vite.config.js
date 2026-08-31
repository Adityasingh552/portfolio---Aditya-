import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const copyAssetsPlugin = () => {
  return {
    name: 'copy-assets',
    buildStart() {
      const resumeSrc = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\f385f5ff-ddf2-4c35-8aa7-83e5f9a71b3b\\media__1784182213653.pdf'
      const resumeDest1 = path.resolve(__dirname, 'public/resume.pdf')
      const resumeDest2 = path.resolve(__dirname, 'public/resume.pdf.placeholder')

      const profileSrc = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\f385f5ff-ddf2-4c35-8aa7-83e5f9a71b3b\\media__1784187936569.jpg'
      const profileDest = path.resolve(__dirname, 'public/profile.jpg')

      try {
        const publicDir = path.resolve(__dirname, 'public')
        if (!fs.existsSync(publicDir)) {
          fs.mkdirSync(publicDir, { recursive: true })
        }

        // Copy resume
        if (fs.existsSync(resumeSrc)) {
          fs.copyFileSync(resumeSrc, resumeDest1)
          fs.copyFileSync(resumeSrc, resumeDest2)
          console.log('Successfully copied resume PDF to public folder!')
        } else {
          console.warn('Source PDF not found at:', resumeSrc)
        }

        // Copy profile image
        if (fs.existsSync(profileSrc)) {
          fs.copyFileSync(profileSrc, profileDest)
          console.log('Successfully copied profile image to public folder!')
        } else {
          console.warn('Source profile image not found at:', profileSrc)
        }
      } catch (err) {
        console.error('Error copying assets:', err)
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyAssetsPlugin()],
  server: {
    port: 3000,
    open: true
  }
})

