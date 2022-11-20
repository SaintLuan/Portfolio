/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: { 
    domains: ['images.prismic.io'], 
    formats: ['image/avif', 'image/webp',], 
    unoptimized: true
  }
};

module.exports = nextConfig;
