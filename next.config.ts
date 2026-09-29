import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: output static HTML ke folder `out/` supaya bisa di-upload
  // ke hosting cPanel (public_html) tanpa Node.js server.
  output: "export",
  // trailingSlash supaya /klinik/ terbaca sebagai folder klinik/index.html di Apache.
  trailingSlash: true,
  images: {
    // Static export tidak punya image optimizer, jadi pakai file asli.
    unoptimized: true,
  },
};

export default nextConfig;
