import bcrypt from "bcrypt";
import { Router } from "express";
import { prisma } from "../utils/db.js";
const router = Router();

router.post("/", async (req, res) => {
  let data_ = req.body;
  const password = data_.password;
  const hash = await bcrypt.hash(password, 10);
  data_ = { ...data_, password: hash };
  const newUser = await prisma.user.create({
    data: data_,
  });
  res.json({ ...newUser, password: "********" });
});

router.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

router.get("/:id", async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.params.id,
    },
  });
  res.json({...user, password: "********"});
});

router.put("/:id", async (req, res) => {
  const userToUpdate = prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: req.body,
  });
  res.json(userToUpdate);
});

router.delete("/:id", async (req, res) => {
  const userToDelete = prisma.user.delete({
    where: {
      id: req.params.id,
    },
  });
  res.json("Usuario eliminado");
});

export default router;
