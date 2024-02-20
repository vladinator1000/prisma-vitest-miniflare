import { PrismaClient } from "@prisma/client"

describe('user model', () => { 
  const prisma = new PrismaClient()

  test('create user', async () => { 
    const user = await prisma.user.create({data: {name: 'Paul Atreides'}})

    expect(user).toEqual({
      id: 1,
      name: 'Paul Atreides'
    })
  })
})