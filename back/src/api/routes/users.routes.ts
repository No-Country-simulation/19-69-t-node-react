import { Router } from "express";
import { prisma } from "../utils/db.js";
import bcrypt from "bcrypt"
const router = Router();

router.post("/", async (req, res) => {
    const password =  await req.body.password;
    const hash = bcrypt.hash(password, 10)
    const newUser = await prisma.user.create({
        data: req.body,
        pasword: hash
    })
    res.json(newUser);
});

router.get("/", async (req, res) => {
    const findUsers = prisma.user.findMany();
    res.json(findUsers);
});

router.get("/:id", async (req, res) => {
    const user = prisma.user.findUnique({
        where: {
            id: req.params.id
        }
    });
    res.json(user);
});

router.put("/:id", async (req, res) => {
    const userToUpdate = prisma.user.update({
        where: {
            id: req.params.id
        },
        data: req.body
    })
    res.json(userToUpdate);
});

router.delete("/", async (req, res) =>{
    const userToDelete = prisma.user.findByIdAndDelete({
        where: {
            id: req.body.id
        }
    })
    res.json("Usuario eliminado");
})


export default router;