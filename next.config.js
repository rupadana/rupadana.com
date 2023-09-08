/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['picsum.photos', 'res.cloudinary.com', 'admin.codecrafters.id'],

  }
};

module.exports = nextConfig;
