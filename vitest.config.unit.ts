import { defineConfig } from 'vitest/config'
import { defineWorkersPoolOptions } from '@cloudflare/vitest-pool-workers/config'

export default defineConfig({
  test: {
    globals: true,
    pool: '@cloudflare/vitest-pool-workers',
    poolOptions: {
      workers: defineWorkersPoolOptions({
        isolatedStorage: true,
        wrangler: {
          configPath: './wrangler.toml',
        },
      }),
    },
  },
})
