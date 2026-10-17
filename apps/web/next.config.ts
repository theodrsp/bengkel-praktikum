import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
  // Meneruskan permintaan /api/* ke backend Express
  async rewrites() {
    const apiBaseUrl = process.env.API_BASE_URL || 'http://localhost:5000';
    return [
      {
        source: '/api/:path*',
        destination: `${apiBaseUrl}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
