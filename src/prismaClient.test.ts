import { PrismaClient } from "@prisma/client"
import { getPrisma } from "./prismaClient"
import { env } from "cloudflare:test"

describe('prismaClient', () => { 
  let prisma = getPrisma(env.DB)

  afterAll(async () => {
    await prisma.$disconnect()
  })

  test('can run basic query', async () => { 
    let result = await prisma.$queryRawUnsafe(
      'select 1 + 1',
    )
    
    expect(result).toEqual(2)
  })
})