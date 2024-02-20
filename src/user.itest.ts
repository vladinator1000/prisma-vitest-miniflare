import { PrismaClient } from "@prisma/client"

describe('user model', () => { 
  const prisma = new PrismaClient()

  beforeEach(async () => {
    await prisma.$queryRawUnsafe(`TRUNCATE "User";`)
  })
  
  afterAll(async () => {
    await prisma.$disconnect()
  })

  test('create user', async () => { 
    const user = await prisma.user.create({data: {name: 'Paul Atreides'}})

    expect(user.name).toEqual('Paul Atreides')
  })
})