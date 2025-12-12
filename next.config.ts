import type { NextConfig } from "next";

// 🚨 CRITICAL: UPDATE THIS TO YOUR NEW GITHUB REPO NAME (e.g., 'siesta-ia-live')
const repoName = 'siesta-ia-live'; 
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // 1. Specifies the base path for ROUTING (for GitHub Pages URL structure)
  basePath: isProd ? `/${repoName}` : '',

  // 2. CRITICAL FIX: Specifies the path for static ASSETS (CSS/JS/Images)
  assetPrefix: isProd ? `/${repoName}/` : '', 

  // 3. IMPORTANT: Tells Next.js to build static HTML/CSS/JS files
  output: 'export', 
  
  // 4. Recommended for static export: Disables Next.js specific Image optimization features
  images: {
    unoptimized: true
  }
};

export default nextConfig;