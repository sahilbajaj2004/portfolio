import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.sahilbajaj.me",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sahilbajaj.me",
        port: "",
        pathname: "/**",
      },
      // Add other domains as needed
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.example.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
