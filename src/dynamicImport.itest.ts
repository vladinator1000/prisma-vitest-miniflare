describe('dynamic import', () => { 
  test('can get Prisma dynamically ', async () => { 
    const {PrismaClient} = await import('@prisma/client')
    const prisma = new PrismaClient()
    expect(prisma).toBeTruthy()

    await prisma.$disconnect()
  })
})