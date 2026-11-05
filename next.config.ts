import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "commons.wikimedia.org" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "cdn.abcotvs.com" },
      { protocol: "https", hostname: "files.illinoispolicy.org" },
      { protocol: "https", hostname: "gray-kcrg-prod.gtv-cdn.com" },
      { protocol: "https", hostname: "gray-kfvs12-prod.gtv-cdn.com" },
      { protocol: "https", hostname: "gray-kwqc-prod.gtv-cdn.com" },
      { protocol: "https", hostname: "images.foxtv.com" },
      { protocol: "https", hostname: "storage.ghost.io" },
      { protocol: "https", hostname: "www.chalkbeat.org" },
      { protocol: "https", hostname: "www.rockrivercurrent.com" },
    ],
  },
};

export default nextConfig;
