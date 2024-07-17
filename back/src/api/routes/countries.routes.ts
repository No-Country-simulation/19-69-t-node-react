import { Router } from "express";
import { prisma } from "../utils/db.js";

const router = Router();

// ! CREATE COUNTRY
router.post("/", async (req, res) => {
  const newCountry = await prisma.country.create({
    data: req.body,
  });
  res.json({
    message: "New country created successfully",
    status: 201,
    data: newCountry,
  });
});

// ! GET ALL COUNTRIES
router.get("/", async (req, res) => {
  const countries = await prisma.country.findMany();
  res.json({
    message: "All countries retrieved successfully",
    status: 200,
    data: countries,
  });
});

// ! GET COUNTRY BY ID
router.get("/:id", async (req, res) => {
  const country = await prisma.country.findUnique({
    where: {
      id: req.params.id,
    },
  });
  res.json({
    message: "Country retrieved successfully",
    status: 200,
    data: country,
  });
});

// ! UPDATE COUNTRY
router.put("/:id", async (req, res) => {
  const country = await prisma.country.update({
    where: {
      id: req.params.id,
    },
    data: req.body,
  });
  res.json({
    message: "Country updated successfully",
    status: 200,
    data: country,
  });
});

// ! DELETE COUNTRY
router.delete("/:id", async (req, res) => {
  const country = await prisma.country.delete({
    where: {
      id: req.params.id,
    },
  });
  res.json({
    message: "Country deleted successfully",
    status: 200,
    data: country,
  });
});

export default router;