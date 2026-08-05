/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
  output: 'standalone',   // ← changed from 'export'
  images: {
    unoptimized: true     // optional – keep it if you don't use external image optimization
  }
};

export default nextConfig;