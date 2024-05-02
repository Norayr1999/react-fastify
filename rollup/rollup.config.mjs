import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import  url  from '@rollup/plugin-url';


export default {
  input: "src/ProfileCard.tsx", // Adjust if your entry file is different
  output: {
    file: "dist/bundle.js",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [
    url({
      include: ['**/*.svg'], // Handle SVG files
      limit: Infinity, // Do not inline SVG files
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    image({
      publicDir: "public",
    }),
    typescript(),
    postcss({
      extensions: [".css"],
    }),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
  ],
  external: ["react", "react-dom"],
};
