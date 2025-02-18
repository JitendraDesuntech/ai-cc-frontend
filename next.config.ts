import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Disable strict mode properly
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
