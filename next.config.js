const useRewrites = true;

module.exports = {
  reactStrictMode: true,
  webpack5: false,
  rewrites: async () => {
    const rewrites = [
        {
            source: '/(.*)',
            destination: '/api/handle-404',
        },
    ];    

    return useRewrites ? rewrites : [];
},
}
