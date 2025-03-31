import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import url from "@rollup/plugin-url";

export default {
  input: {
    main: "src/index.ts",
    "default-options": "src/default-options.ts",
    anchoring: "src/anchoring.ts",
    reminder: "src/reminder.ts",
    "social-norms": "src/social-norms.ts",
    confidence: "src/confidence.ts",
    "decision-friction": "src/decision-friction.ts",
    reflection: "src/reflection.ts",
  },
  output: [
    {
      dir: "dist",
      format: "esm",
      sourcemap: true,
      preserveModules: true, // Ensures folder structure is preserved
      preserveModulesRoot: "src", // Keeps correct folder paths
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "dist",
      emitDeclarationOnly: false,
    }),
    postcss({
      modules: false,
      extract: false,
    }),
    url({
      include: ["**/*.png", "**/*.jpg", "**/*.gif", "**/*.svg"],
      // Set limit to 0 to always copy the file instead of inlining it
      limit: 0,
      fileName: "[dirname][hash][extname]",
    }),
    copy({
      targets: [
        { src: "src/styles/globals.css", dest: "dist/styles" },
        { src: "src/styles/tokens.css", dest: "dist/styles" },
        { src: "src/assets", dest: "dist/assets" },
      ],
    }),
  ],
  external: ["react", "react-dom"],
};
