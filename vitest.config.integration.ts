import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'miniflare',
    include: ['**.itest.ts'],
    fileParallelism: false,
    sequence: {
      concurrent: false,
    },
  },
})
