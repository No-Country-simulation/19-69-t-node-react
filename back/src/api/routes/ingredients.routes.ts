import { Router } from "express";
import { prisma } from "../utils/db.js";

const router = Router();

// ! CREATE INGREDIENT
router.post("/", async (req, res) => {
  const newIngredient = await prisma.ingredient.create({
    data: req.body,
  });
  res.json({
    message: "New ingredient created successfully",
    status: 201,
    data: newIngredient,
  });
});

// ! GET ALL INGREDIENTS
router.get("/", async (req, res) => {
  const ingredients = await prisma.ingredient.findMany();
  res.json({
    message: "All ingredients retrieved successfully",
    status: 200,
    data: ingredients,
  });
});

// ! GET INGREDIENT BY ID
router.get("/:id", async (req, res) => {
  const ingredient = await prisma.ingredient.findUnique({
    where: {
      id: req.params.id,
    },
  });
  res.json({
    message: "Ingredient retrieved successfully",
    status: 200,
    data: ingredient,
  });
});

// ! UPDATE INGREDIENT
router.put("/:id", async (req, res) => {
  const ingredient = await prisma.ingredient.update({
    where: {
      id: req.params.id,
    },
    data: req.body,
  });
  res.json({
    message: "Ingredient updated successfully",
    status: 200,
    data: ingredient,
  });
});

// ! DELETE INGREDIENT
router.delete("/:id", async (req, res) => {
  const ingredient = await prisma.ingredient.delete({
    where: {
      id: req.params.id,
    },
  });
  res.json({
    message: "Ingredient deleted successfully",
    status: 200,
    data: ingredient,
  });
});

export default router;