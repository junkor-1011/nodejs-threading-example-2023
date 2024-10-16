import esbuild from "esbuild";

await esbuild.build({
  bundle: true,
  entryPoints: ["./src/main.ts"],
  outdir: "./dist",
  outExtension: {
    ".js": ".mjs",
  },
  platform: "node",
  format: "esm",
  banner: {
    js:
      'import { createRequire } from "node:module"; import url from "node:url"; const require = createRequire(import.meta.url); const __filename = url.fileURLToPath(import.meta.url); const __dirname = url.fileURLToPath(new URL(".", import.meta.url));',
  },
});
