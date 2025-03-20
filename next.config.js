/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true
  },
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
  reactStrictMode: true,
}

module.exports = nextConfig 