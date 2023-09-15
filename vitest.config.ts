/// <reference types="vitest" />
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
// @ts-ignore
export default defineConfig({
  test: {
    environment: "jsdom"
  }
})
