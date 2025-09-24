// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,  
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'], 
  trailingSlash: true,  
};

export default nextConfig;
