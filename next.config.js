/** @type {import('next').NextConfig} */
const nextConfig = {
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
      // Define fallbacks for Node.js core modules
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
        crypto: false,
        stream: false,
        http: false,
        https: false,
        zlib: false,
        async_hooks: false,
        events: false,
        'fs/promises': false,
        child_process: false,
        util: false,
        buffer: false
      };
    }
    return config;
  }
};

module.exports = nextConfig;