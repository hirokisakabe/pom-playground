import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import simpleImportSort from "eslint-plugin-simple-import-sort";

// eslint-config-next/core-web-vitals includes @typescript-eslint plugin,
// which conflicts with tseslint.configs.strictTypeChecked.
// Filter out the duplicate plugin definition to avoid "Cannot redefine plugin" error.
const nextConfigs = nextCoreWebVitals.filter(
  (c) => !c.plugins?.["@typescript-eslint"],
);

export default defineConfig(
  ...nextConfigs,
  eslint.configs.recommended,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "@typescript-eslint/consistent-type-assertions": [
        "error",
        {
          assertionStyle: "never",
        },
      ],
      "func-style": ["error", "declaration", { allowArrowFunctions: false }],
    },
  },
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "src/components/ui/**",
      "src/lib/utils.ts",
    ],
  },
  eslintConfigPrettier,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  globalIgnores(["eslint.config.mjs", "postcss.config.mjs"]),
);
