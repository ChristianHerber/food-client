/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost']
  },
  env: {
    apiUrl: 'https://localhost:3000'
  }
}

module.exports = nextConfig
