/** @type {import('next').NextConfig} */
const nextConfig = {
  // Core configurations
  reactStrictMode: false,
  
  // Disable certain checks during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Image optimization
  images: {
    domains: ['tphecrdxwyswibwtggsa.supabase.co'],
    unoptimized: true,
  },

  // Experimental features (only keeping essential ones)
  experimental: {
    webpackBuildWorker: true,
    // Removed potentially problematic experimental features
  },
  
  // Increase build memory limit
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
}

export default nextConfig
