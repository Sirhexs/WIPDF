/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true
  },
  experimental: {
    optimizePackageImports: ['@/components', '@/utils', '@/types']
  }
};

module.exports = nextConfig;
