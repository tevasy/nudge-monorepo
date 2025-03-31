/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },

  transpilePackages: ["nudge-library"],
};

module.exports = nextConfig;
