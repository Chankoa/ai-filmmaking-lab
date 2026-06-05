import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

const ariaQueryShim = fileURLToPath(new URL("./src/shims/aria-query.js", import.meta.url));
const axObjectQueryShim = fileURLToPath(new URL("./src/shims/axobject-query.js", import.meta.url));

export default defineConfig({
  site: "https://master-ai-filmmaking.local",
  devToolbar: {
    enabled: false,
  },
  vite: {
    resolve: {
      alias: {
        "aria-query": ariaQueryShim,
        "axobject-query": axObjectQueryShim,
      },
    },
  },
});
