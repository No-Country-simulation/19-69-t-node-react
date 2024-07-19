import { Router } from "express";
import { prisma } from "../utils/db.js";

const router = Router();

// ! CREATE FOOD WITH TAGS, COUNTRY AND INGREDIENTS
router.post("/", async (req, res) => {
  const newFood = await prisma.food.create({
    data: req.body,
  });
  res.json({
    message: "New food created successfully",
    status: 201,
    data: newFood,
  });
});

// ! EXAMPLE OF CREATING FOOD WITH TAGS, COUNTRY AND INGREDIENTS
// ! THIS IS FOR TESTING PURPOSES ONLY
router.post("/example", async (req, res) => {
  const example =  {
    name: 'Hamburguesa',
    price: 10.99,
    description: 'Deliciosa hamburguesa con queso y tocino',
    image: '',
    country: {
      connect: {
        id: 'cuid_of_country'
      }
    },
    ingredients: {
      connect: [
        { id: 'cuid_of_ingredient1' },
        { id: 'cuid_of_ingredient2' },
        { id: 'cuid_of_ingredient3' }
      ]
    },
    tags: {
      connect: [
        { id: 'cuid_of_tag1' },
        { id: 'cuid_of_tag2' },
        { id: 'cuid_of_tag3' }
      ]
    }
  }
  res.json({ message: 'This is an example of food creation', status: 200, data: example })
})

// ! GET ALLS FOODS
router.get("/", async (req, res) => {
  const foods = await prisma.food.findMany({
    include: {
      tags: true,
      country: true,
      ingredients: true,
    },
  });
  res.json({
    message: "Food retrieved successfully",
    status: 200,
    data: foods,
  });
});

// ! GET FOOD BY ID
router.get("/:id", async (req, res) => {
  const food = await prisma.food.findUnique({
    include:{
      tags: true,
      country: true,
      ingredients: true,
    },
    where: {
      id: req.params.id,
    },
  });
  res.json({
    message: "Food retrieved successfully",
    status: 200,
    data: food,
  });
});

// ! UPDATE FOOD
router.put("/:id", async (req, res) => {
  const food = await prisma.food.update({
    include:{
      tags: true,
      country: true,
      ingredients: true,
    },
    where: {
      id: req.params.id,
    },
    data: req.body,
  });
  res.json({
    message: "Food updated successfully",
    status: 200,
    data: food,
  });
});

// ! DELETE FOOD
router.delete("/:id", async (req, res) => {
  const food = await prisma.food.delete({
    include:{
      tags: true,
      country: true,
      ingredients: true,
    },
    where: {
      id: req.params.id,
    },
  });
  res.json({
    message: "Food deleted successfully",
    status: 200,
    data: food,
  });
});

export default router;