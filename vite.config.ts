import { defineConfig } from "vite"
import pugPlugin from "vite-plugin-pug"

const locals = { name: "My Pug" }

export default defineConfig({
  plugins: [pugPlugin({}, locals)],
})
