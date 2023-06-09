/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL
  },
  images: {
    domains: ['assets.entrepreneur.com'],
  },
}

module.exports = nextConfig
