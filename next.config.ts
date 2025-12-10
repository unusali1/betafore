import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",          // leave empty if default
        pathname: "/**",   // allow all paths from this domain
      },
    ],
  },
};

export default nextConfig;
