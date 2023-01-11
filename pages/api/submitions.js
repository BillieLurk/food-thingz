import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function store(name, price, location, description, by) {
  const foodPlace = await prisma.foodPlace.create({
    data: {
      name: name,
      price: parseInt(price),
      location: location,
      description: description,
      by: by,
    },
  });
  
}

async function del(id) {
  
  const foodPlace = await prisma.foodPlace.delete({
    
    where: {
      id: parseInt(id),
    },
  });
  
}

export default async function handler(req, res) {
  console.log(req.body);
  //handle a json post request
  if (req.method === "POST") {
    // Process a POST request
    
    store(
      req.body.name,
      req.body.price,
      req.body.location,
      req.body.description,
      req.body.by
    )
      .then(async () => {
        await prisma.$disconnect();
      })
      .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
      });
  } else if (req.method === "DELETE") {
    
    del(req.body.id)
    
  } else if (req.method === "GET") {
    // Process a GET request
    const foodPlace = await prisma.foodPlace.findMany();
    res.status(200).json(foodPlace);
  }
}
