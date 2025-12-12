import type { NextConfig } from "next";

// 🚨 CRITICAL: REPLACE 'siesta-ia-live' WITH YOUR ACTUAL REPO NAME 🚨
const repoName = 'siesta-ia-live'; 
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // 1. Tells Next.js to build static HTML/CSS/JS files
  output: 'export', 
  
  // 2. Base path for ROUTING (internal links like <Link> and router push)
  basePath: isProd ? `/${repoName}` : '',

  // 3. Asset prefix for static ASSETS (CSS, JS, images referenced by Next/Image)
  assetPrefix: isProd ? `/${repoName}/` : '', 

  // 4. Required for static export with Next/Image
  images: {
    unoptimized: true
  }
};

export default nextConfig;