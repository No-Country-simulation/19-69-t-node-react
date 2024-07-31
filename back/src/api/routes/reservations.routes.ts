import { Router } from 'express';
import { prisma } from '../utils/db.js';

const router = Router();


// Función para verificar si una fecha es válida
const isValidDate = (date: Date) => {
  return date instanceof Date && !isNaN(date.getTime());
};


// Crear reserva
// Crear reserva
router.post('/', async (req, res) => {
  try {
    const { nombre, apellidos, numeroAdultos, numeroNinos, fecha, hora, phone } = req.body;
    const fechaObj = new Date(fecha);

    if (!isValidDate(fechaObj)) {
      return res.status(400).json({ message: 'Fecha no válida' });
    }

    // Verificar el número de reservas existentes para la misma fecha y hora
    const existingReservationsCount = await prisma.reservation.count({
      where: {
        fecha: fechaObj,
        hora: hora
      }
    });

    if (existingReservationsCount >= 15) {
      return res.status(400).json({ message: 'Hora no disponible, se ha alcanzado el límite de reservas.' });
    }

    const newReservation = await prisma.reservation.create({
      data: {
        nombre,
        apellidos,
        numeroAdultos,
        numeroNinos,
        fecha: fechaObj,
        hora,
        phone
      },
    });

    res.status(201).json({
      message: 'New reservation created successfully',
      data: newReservation,
    });
  } catch (error: any) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

// Obtener reservas por fecha
router.get('/', async (req, res) => {
  const { fecha } = req.query;

  if (!fecha) {
    return res.status(400).json({ message: 'La fecha es requerida' });
  }

  try {
    // Validar y convertir la fecha
    const fechaObj = new Date(fecha as string);
    if (!isValidDate(fechaObj)) {
      return res.status(400).json({ message: 'Fecha no válida' });
    }


    const startOfDay = new Date(fechaObj);
    startOfDay.setHours(0, 0, 0, 0);

    const reservations = await prisma.reservation.findMany({
      where: {
        fecha: {
          gte: startOfDay,  // Inicio del día
          lte: new Date(fechaObj.setHours(23, 59, 59, 999)), // Fin del día
        },
      },
    });

    res.status(200).json(reservations);
  } catch (error) {
    console.error('Error en la ruta /api/reservations:', error);
    res.status(500).json({ message: 'Error interno del servidor', error: (error as any).message });
  }
});




// Obtener reserva por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  if (isNaN(Number(id))) {
    return res.status(400).json({ message: 'ID no válido' });
  }

  try {
    const reservation = await prisma.reservation.findUnique({
      where: { id: Number(id) },
    });

    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }

    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: (error as any).message });
  }
});

// Actualizar reserva
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, apellidos, numeroAdultos, numeroNinos, fecha, hora, phone } = req.body;

  if (isNaN(Number(id))) {
    return res.status(400).json({ message: 'ID no válido' });
  }

  // Validar y convertir la fecha
  const fechaObj = new Date(fecha);
  if (!isValidDate(fechaObj)) {
    return res.status(400).json({ message: 'Fecha no válida' });
  }

  try {
    const updatedReservation = await prisma.reservation.update({
      where: { id: Number(id) },
      data: { nombre, apellidos, numeroAdultos, numeroNinos, fecha: fechaObj, hora, phone },
    });

    res.status(200).json({
      message: 'Reservation updated successfully',
      data: updatedReservation,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: (error as any).message });
  }
});

// Eliminar reserva
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  if (isNaN(Number(id))) {
    return res.status(400).json({ message: 'ID no válido' });
  }

  try {
    const deletedReservation = await prisma.reservation.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({
      message: 'Reservation deleted successfully',
      data: deletedReservation,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: (error as any).message });
  }
});

export default router;