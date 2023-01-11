import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const foodPlace = await prisma.foodPlace.create({
    data: {
      name: 'PONG',
      price: 4,
      location: 'New York'
    },
  })
  console.log(foodPlace)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })