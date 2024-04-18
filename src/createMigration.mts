#!/usr/bin/env zx
// How to write scripts with zx: https://google.github.io/zx/
import { $, glob, chalk, argv, spinner, fs } from 'zx'

let databaseName = 'test'
let migrationName = argv._[0]

await spinner(
  'Applying existing migrations...',
  () => $`npx wrangler d1 migrations apply ${databaseName} --local`,
)

// Generate an empty migration file
await $`npx wrangler d1 migrations create ${databaseName} ${migrationName}`

let migrationFiles = await glob(`./migrations/*${migrationName}.sql`)
let migrationFilePath = migrationFiles.at(-1)

console.log('Created migration: ' + chalk.green(migrationFilePath))

// Use `npx prisma migrate diff` to generate a SQL script that take the difference
// between your database and the Prisma schema, then saves it to the migration file.
let diffFlags = [
  `--from-local-d1`,
  `--to-schema-datamodel`,
  './prisma/schema.prisma',
  `--script`,
  `--output`,
  migrationFilePath,
]

await $`npx prisma migrate diff ${diffFlags}`

await fixNotAuthorisedBug()

// https://github.com/prisma/prisma/issues/23827
async function fixNotAuthorisedBug() {
  let migration = await fs.readFile(migrationFilePath)
  let content = migration.toString()
  let newContent = content.replace(
    'PRAGMA foreign_key_check;',
    '-- https://github.com/prisma/prisma/issues/23827\n-- PRAGMA foreign_key_check;',
  )

  await fs.writeFile(migrationFilePath, newContent)
}

// - Now you can migrate your local and remote D1 database instances using `wrangler` and re-generate your Prisma Client to begin making queries.

// ```bash
// npx wrangler d1 migrations apply prod-prisma-d1-app --local
// npx wrangler d1 migrations apply prod-prisma-d1-app --remote
// npx prisma generate
// ```
