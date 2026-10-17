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
    let apiBaseUrl = process.env.API_BASE_URL || 'http://localhost:5000';

    // Otomatis tambahkan https:// jika lupa ditulis di Vercel
    if (!apiBaseUrl.startsWith('http://') && !apiBaseUrl.startsWith('https://')) {
      apiBaseUrl = `https://${apiBaseUrl}`;
    }

    // Hapus trailing slash jika ada (misal https://api.vercel.app/ -> https://api.vercel.app)
    apiBaseUrl = apiBaseUrl.replace(/\/+$/, '');

    return [
      {
        source: '/api/:path*',
        destination: `${apiBaseUrl}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
