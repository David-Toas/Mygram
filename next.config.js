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
      // Define fallbacks for all Node.js core modules
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
        tty: false,
        net: false,
        dns: false,
        tls: false,
        assert: false,
        buffer: require.resolve('buffer/')
      };
      
      // Add buffer polyfill
      config.plugins.push(
        new config.webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer']
        })
      );
    }
    return config;
  },
  transpilePackages: ['@auth/prisma-adapter', '@prisma/client']
};

module.exports = nextConfig;