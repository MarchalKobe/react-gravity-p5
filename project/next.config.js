/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: !!process.env.NEXT_BUILD_IGNORE_ESLINT,
  },
  typescript: {
    ignoreBuildErrors: !!process.env.NEXT_BUILD_IGNORE_TYPESCRIPT,
  },

  async rewrites() {
    if (process.env.NEXT_PUBLIC_SITE_UNAVAILABLE) {
      // Rewrite all pages to the 503 page
      return {
        beforeFiles: [
          {
            source: '/((?!api|_next/static|favicon.ico|503).*)',
            destination: '/503',
          },
        ],
      };
    }

    return [];
  },

  async redirects() {
    // Always redirect this page back to the index.
    // When the 503 mode is active, a rewrite will still render it
    return [
      {
        source: '/503',
        destination: '/',
        permanent: false,
      },
    ];
  },
};
