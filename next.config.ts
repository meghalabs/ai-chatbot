/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  env: {
    TOGETHER_API_KEY: process.env.TOGETHER_API_KEY,
  },
};

module.exports = nextConfig;
