// /** @type {import('next').NextConfig} */
interface RemotePattern {
  protocol: string;
  hostname: string;
}

interface ImageConfig {
  remotePatterns: RemotePattern[];
}

import type { Configuration } from 'webpack';

interface NextConfig {
  images: ImageConfig;
  webpack: (config: Configuration, context: { isServer: boolean }) => Configuration;
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "instagram.flos5-1.fna.fbcdn.net",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve = config.resolve || {};
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        "fs/promises": false,
        child_process: false,
        async_hooks: false,
        events: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;