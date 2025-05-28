import type { NextConfig } from "next";
import path from "path";
import UnoCSS from "@unocss/webpack";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true, // If using React 19 compiler
  },
  // Alias (like your Vite config)
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    config.plugins.push(UnoCSS());
    return config;
  },
};

export default nextConfig;
