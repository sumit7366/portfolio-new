/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // static export
  images: { unoptimized: true }, // allow external images
};

module.exports = nextConfig;
