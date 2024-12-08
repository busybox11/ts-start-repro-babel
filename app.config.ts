// app.config.ts
import { defineConfig } from "@tanstack/start/config";

// Jotai-specific Vite config
// See https://jotai.org/docs/guides/vite
import jotaiDebugLabel from "jotai/babel/plugin-debug-label";
import jotaiReactRefresh from "jotai/babel/plugin-react-refresh";

export default defineConfig({
  react: {
    babel: {
      // This should show a type console.error
      // When running the dev server with those plugins,
      // there should be a Zod runtime error
      plugins: [jotaiDebugLabel, jotaiReactRefresh],
    },
  },
});
