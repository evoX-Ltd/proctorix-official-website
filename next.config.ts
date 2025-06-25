import type { NextConfig } from "next";
import path from "path";
import UnoCSS from "@unocss/webpack";
import createNextIntlPlugin from "next-intl/plugin";

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

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

// TODO:
// - file structure
// - shadcn
//     - theming
//     - configuration
//     -
