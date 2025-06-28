/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = async () => {
  // Dynamically import plugins
  const createNextIntlPlugin = (await import("next-intl/plugin")).default;
  const unpluginIcons = (await import("unplugin-icons/webpack")).default;

  const withNextIntl = createNextIntlPlugin();

  return withNextIntl({
    experimental: {
      reactCompiler: true, // If using React 19 compiler
    },
    webpack: (config) => {
      config.resolve.alias["@"] = path.resolve(__dirname, "src");
      config.plugins.push(
        unpluginIcons({
          compiler: "jsx",
          jsx: "react",
          transform: (svg) => {
            return svg.replace(/^<svg /, '<svg fill="currentColor" ');
          },
        })
      );
      return config;
    },
  });
};

// TODO:
// - file structure
// - shadcn
//     - theming
//     - configuration
//     -
