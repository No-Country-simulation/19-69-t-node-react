import { Router } from "express";
import { prisma } from "../utils/db.js";

const router = Router();

// ! CREATE TAG
router.post("/", async (req, res) => {
  const newTag = await prisma.tag.create({
    data: req.body,
  });
  res.json({
    message: "New tag created successfully",
    status: 201,
    data: newTag,
  });
});

// ! GET ALL TAGS
router.get("/", async (req, res) => {
  const tags = await prisma.tag.findMany();
  res.json(tags);
});

// ! GET TAG BY ID
router.get("/:id", async (req, res) => {
  const tag = await prisma.tag.findUnique({
    where: {
      id: req.params.id,
    },
  });
  res.json(tag);
});

// ! UPDATE TAG
router.put("/:id", async (req, res) => {
  const tag = await prisma.tag.update({
    where: {
      id: req.params.id,
    },
    data: req.body,
  });
  res.json({
    message: "Tag updated successfully",
    status: 200,
    data: tag,
  });
});

//! DELETE TAG
router.delete("/:id", async (req, res) => {
  const tag = await prisma.tag.delete({
    where: {
      id: req.params.id,
    },
  });
  res.json({
    message: "Tag deleted successfully",
    status: 200,
    data: tag,
  });
});

export default router;
