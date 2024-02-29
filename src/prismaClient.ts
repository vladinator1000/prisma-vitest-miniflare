import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'

export function getPrisma(databaseUrl?: string) {
  if (!databaseUrl) {
    throw new Error('Missing databaseUrl')
  }

  const pool = new pg.Pool({ connectionString: databaseUrl })
  const adapter = new PrismaPg(pool)
  const prisma = new PrismaClient({ adapter })

  return prisma
}
