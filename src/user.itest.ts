import { getPrisma } from "./prismaClient"

describe('user model', () => { 
  const prisma = getPrisma(process.env.DATABASE_URL)

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