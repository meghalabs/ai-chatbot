import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',            // optional
      allowedOrigins: ['localhost:3000'], // optional
    },
  },
  env: {
    TOGETHER_AI_API_KEY: process.env.TOGETHER_AI_API_KEY,
  },
};

export default nextConfig;
