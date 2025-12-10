import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["fakestoreapi.com"], // <-- whitelist this domain
  },
};

export default nextConfig;
