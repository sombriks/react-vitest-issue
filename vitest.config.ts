import { defineConfig } from 'vite'

// https://vitejs.dev/config/
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default defineConfig({
  test: {
    environment: "jsdom"
  }
})
