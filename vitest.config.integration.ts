import { defineConfig } from 'vitest/config'
import { defineWorkersPoolOptions } from '@cloudflare/vitest-pool-workers/config'

export default defineConfig({
  test: {
    globals: true,
    include: ['**.itest.ts'],
    pool: '@cloudflare/vitest-pool-workers',
    poolOptions: {
      workers: defineWorkersPoolOptions({
        isolatedStorage: true,
        wrangler: {
          configPath: './wrangler.toml',
        },
      }),
    },
    // The lines below are equivalent to Jest's --runInBand
    // "Run all tests serially in the current process, rather than creating a worker pool of child processes that run tests."
    fileParallelism: false,
    sequence: {
      concurrent: false,
    },
  },
})
