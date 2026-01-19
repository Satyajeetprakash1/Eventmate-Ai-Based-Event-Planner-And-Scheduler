/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true
  },
  images: {
    domains: ["firebasestorage.googleapis.com", "lh3.googleusercontent.com", "picsum.photos", "images.unsplash.com"]
  }
};

module.exports = nextConfig;
