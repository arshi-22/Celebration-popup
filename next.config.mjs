/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: '/Celebration-popup',
  images: {
    unoptimized: true, // Disable Next.js image optimization for static export
  },
  trailingSlash: true
};

export default nextConfig;
