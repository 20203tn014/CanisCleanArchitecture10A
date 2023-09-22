/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '../dist',
  images: {
      domains: ['placehold.co','www.utez.edu.mx','images.unsplash.com','plus.unsplash.com']
  },
  experimental: {
    outputStandalone: true,
  }
}

module.exports = nextConfig