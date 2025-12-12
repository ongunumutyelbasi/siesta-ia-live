import type { NextConfig } from "next";

// 🚨 CONFIRM THIS REPO NAME MATCHES YOUR NEW GITHUB REPOSITORY 🚨
const repoName = 'siesta-ia-live'; // e.g., 'siesta-ia-live'
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // 1. Specifies the base path for ROUTING
  basePath: isProd ? `/${repoName}` : '',

  // 2. CRITICAL FIX: Specifies the path for static ASSETS (CSS/JS/Images)
  assetPrefix: isProd ? `/${repoName}/` : '', 

  // 3. IMPORTANT: Tells Next.js to build static HTML/CSS/JS files
  output: 'export', 
  
  // 4. Recommended for static export
  images: {
    unoptimized: true
  }
};

export default nextConfig;