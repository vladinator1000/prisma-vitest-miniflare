import { PrismaClient } from "@prisma/client"

describe('static import', () => { 
  test('can instantiate Prisma', async () => { 
    const prisma = new PrismaClient()
    expect(prisma).toBeTruthy()

    await prisma.$disconnect()
  })
})