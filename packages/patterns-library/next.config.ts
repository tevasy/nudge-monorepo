/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },

  transpilePackages: ["nudge-components-library"],
};

module.exports = nextConfig;
