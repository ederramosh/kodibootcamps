import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://res.cloudinary.com/daoy46bpe/image/upload/**')],
  },

};

export default nextConfig;
