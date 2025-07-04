import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import parser from "@typescript-eslint/parser";
import auto from "eslint-config-canonical/auto";
import sonar from "eslint-plugin-sonarjs";
import tailwind from "eslint-plugin-tailwindcss";
import reactPlugin from "eslint-plugin-react";
import pluginQuery from "@tanstack/eslint-plugin-query";
// import nextjs from "@next/eslint-plugin-next";

export default tseslint.config(
  // Base Next.js recommended config
  {
    files: ["**/*.{ts,tsx}"],
    // plugins: {
    //   "@next/next": nextjs,
    // },
    // rules: {
    //   ...nextjs.configs.recommended.rules,
    //   ...nextjs.configs["core-web-vitals"].rules,
    //   "@next/next/no-html-link-for-pages": ["error", "app/"], // Adjust if using pages directory
    // },
  },

  // Canonical config with react-hooks removed
  auto.map((config) => {
    if (config.plugins && config.plugins["react-hooks"]) {
      const { ["react-hooks"]: _, ...rest } = config.plugins;
      return { ...config, plugins: rest };
    }
    return config;
  }),

  // TanStack Query config
  ...pluginQuery.configs["flat/recommended"],

  // Ignore patterns
  {
    ignores: [
      "**/build",
      "**/*.config.{js,mjs,ts}",
      "**/*.d.ts",
      "**/*.json",
      "**/*.yaml",
      "**/unimport.d.ts",
      ".next/**",
      "node_modules/**",
      // "**/scripts/sort-untranslated.js",
    ],
  },

  // Main configuration
  {
    extends: [
      reactPlugin.configs.flat.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.strict,
      ...tailwind.configs["flat/recommended"],
      sonar.configs.recommended,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      "@stylistic/semi": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "unicorn/prefer-string-replace-all": "off",

      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/enforces-negative-arbitrary-values": "warn",
      "tailwindcss/enforces-shorthand": "warn",
      "tailwindcss/migration-from-tailwind-2": "warn",
      // 'tailwindcss/no-arbitrary-value': 'warn',
      "tailwindcss/no-contradicting-classname": "warn",
      "tailwindcss/no-unnecessary-arbitrary-value": "warn",
      // 'no-unused-vars': 'off',
      curly: "off",

      "@tanstack/query/mutation-property-order": "off",

      "react/no-unknown-property": "off",
      "react/jsx-no-bind": "off",
      // Add any specific react-hooks rule overrides if needed
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/react-compiler": "error",
      // Note: you must disable the base rule as it can report incorrect errors
      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": "error",
      // 'sonarjs/deprecation': 'off',
      "react/no-unescaped-entities": "off",
      "no-undef": "off",
      "prettier/prettier": "off",
      "canonical/filename-match-exported": "off",
      "func-style": "off",
      "canonical/filename-match-regex": "off",
      "react/function-component-definition": "off",
      "canonical/id-match": "off",
      "react/jsx-no-undef": "off",
      "import/no-unassigned-import": "off",
      "import/extensions": "off",
      "react/forbid-component-props": "off",
      "react-refresh/only-export-components": "off",
      "id-length": "off",
      "react/react-in-jsx-scope": "off",
      "sonarjs/no-nested-conditional": "off",
      "sonarjs/pseudo-random": "off",
      "sonarjs/todo-tag": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  }
);
