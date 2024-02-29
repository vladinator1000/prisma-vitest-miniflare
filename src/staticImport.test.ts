import { PrismaClient } from "@prisma/client"
import { getPrisma } from "./prismaClient"

describe('static import', () => { 
  test('can instantiate Prisma', async () => { 
    const prisma = getPrisma(process.env.DATABASE_URL)
    
    expect(prisma).toBeTruthy()

    await prisma.$disconnect()
  })
})