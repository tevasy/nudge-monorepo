/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },

  transpilePackages: ["nudge-library"],
};

module.exports = nextConfig;
