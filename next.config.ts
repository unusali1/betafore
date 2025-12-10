import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "",         
        pathname: "/**",   
      },
      
      {
      protocol: "https",
      hostname: "mm-assesment-server.vercel.app",
      pathname: "/**"
    }
    ],
  },
};

export default nextConfig;
