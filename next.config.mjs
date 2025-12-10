/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    unoptimized: false,
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Production optimizations
  productionBrowserSourceMaps: false,
  
  // Compression
  compress: true,
  
  // SwcMinify
  swcMinify: true,
  
  // Webpack optimizations
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            // Split out dependencies into separate chunks for better caching
            reactVendor: {
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              name: 'react-vendor',
              priority: 40,
            },
            bootstrap: {
              test: /[\\/]node_modules[\\/](bootstrap)[\\/]/,
              name: 'bootstrap-vendor',
              priority: 35,
            },
            apexcharts: {
              test: /[\\/]node_modules[\\/](apexcharts|react-apexcharts)[\\/]/,
              name: 'apexcharts-vendor',
              priority: 30,
            },
            common: {
              minChunks: 2,
              priority: 20,
              reuseExistingChunk: true,
              name: 'common',
            },
          },
        },
      };
    }
    
    return config;
  },

  // Experimental features for performance
  experimental: {
    optimizePackageImports: ['react-icons/fi'],
  },
};

export default nextConfig;
