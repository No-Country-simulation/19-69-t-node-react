import { Router } from "express";
import { prisma } from "../utils/db.js";

const router = Router();


// ! CREATE RESERVATION
router.post("/", async (req, res) => {
  const newReservation = await prisma.reservation.create({
    data: req.body,
  });
  res.json({
    message: "New reservation created successfully",
    status: 201,
    data: newReservation,
  });
});

// ! GET RESERVATION BY ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const reservation = await prisma.reservation.findUnique({
      where: {
        id,
      },
    });
    if (!reservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    return res.status(200).json(reservation);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

// ! GET ALL RESERVATIONS BY USER ID
router.get("/user/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const reservations = await prisma.reservation.findMany({
      where: {
        userId,
      },
    });
    if (!reservations) {
      return res.status(404).json({ message: "Reservations not found" });
    }
    return res.status(200).json(reservations);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

// ! UPDATE RESERVATION
router.put("/:id", async (req, res) => {
  const reservation = await prisma.reservation.update({
    where: {
      id: req.params.id,
    },
    data: req.body,
  });
  res.json({
    message: "Reservation updated successfully",
    status: 200,
    data: reservation,
  });
});

// ! DELETE RESERVATION
router.delete("/:id", async (req, res) => {
  const reservation = await prisma.reservation.delete({
    where: {
      id: req.params.id,
    },
  });
  res.json({
    message: "Reservation deleted successfully",
    status: 200,
    data: reservation,
  });
});


export default router;
