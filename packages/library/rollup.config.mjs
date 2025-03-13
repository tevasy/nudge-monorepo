import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";

export default {
  input: {
    main: "src/index.ts",
    "default-options": "src/default-options.ts",
    anchoring: "src/anchoring.ts",
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
      modules: true,
      extract: true,
    }),
    copy({
      targets: [
        { src: "src/styles/globals.css", dest: "dist/styles" },
        { src: "src/styles/tokens.css", dest: "dist/styles" },
      ],
    }),
  ],
  external: ["react", "react-dom"],
};
