import path from "path";
import { NextConfig } from "next";

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },
  webpack: (config, options) => {
    console.log("🔍 Running Webpack Configuration...");

    try {
      const resolvedPath = require.resolve("nudge-library/default-options");
      console.log(
        "✅ Resolved nudge-library/default-options to:",
        resolvedPath
      );
    } catch (error) {
      console.error(
        "❌ Failed to resolve nudge-library/default-options",
        error
      );
    }

    if (!options.isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "nudge-library/default-options": path.resolve(
          __dirname,
          "node_modules/nudge-library/dist/default-options.js"
        ),
      };
    }

    return config;
  },
};

export default nextConfig;
