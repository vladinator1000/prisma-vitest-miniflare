import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'miniflare',
    include: ['**.itest.ts'],
    // The lines below are equivalent to Jest's --runInBand
    // "Run all tests serially in the current process, rather than creating a worker pool of child processes that run tests."
    fileParallelism: false,
    sequence: {
      concurrent: false,
    },
  },
})
