/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/api-proxy/:path*',
        destination:
          process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:5328/api-proxy/:path*'
            : '/api-proxy/',
      },
    ];
  },
};

module.exports = nextConfig;
