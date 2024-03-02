/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['picsum.photos', 'res.cloudinary.com', 'admin.codecrafters.id', 'vitals.vercel-insights.com', 'admin.rupadana.com','avatars.githubusercontent.com', 'github.com'],

  },
};

module.exports = nextConfig;