/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',        // ← was 'export'
  images: {
    unoptimized: true          // keep this if you want unoptimized images
  }
};

export default nextConfig;