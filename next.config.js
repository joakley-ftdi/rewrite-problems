module.exports = {
  reactStrictMode: true,
  rewrites: async () => {
    // support prefix for Routing Proxy to detect merx static file urls
    const rewrites = [
        {
            source: '/merx/_next/:path*',
            destination: '/_next/:path*',
        },
        {
            source: '/merx/fonts/:path*',
            destination: '/fonts/:path*',
        },
        {
            source: '/merx/favicon.ico',
            destination: '/favicon.ico',
        },
        {
          source: '/(.*)',
          destination: '/api/handle-404',
      },
  ];

    return rewrites;
},
}
