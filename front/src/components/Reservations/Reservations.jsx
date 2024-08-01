import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';

const Reservations = () => {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [telefono, setTelefono] = useState(''); // Estado para el teléfono
    const [numeroAdultos, setNumeroAdultos] = useState(1);
    const [numeroNinos, setNumeroNinos] = useState(0);
    const [fecha, setFecha] = useState(new Date());
    const [hora, setHora] = useState('10:00');
    const [horasDisponibles, setHorasDisponibles] = useState([]);
    const [horasReservadas, setHorasReservadas] = useState([]);
    const [mensaje, setMensaje] = useState('');

    const navigate = useNavigate();

    const horasDeSemana = [
        '10:00', '11:00', '12:00', '13:00', '14:00',
        '15:00', '16:00', '17:00', '18:00', '19:00',
        '20:00'
    ];

    const horasDeFinDeSemana = [
        '11:40', '12:40', '13:40', '14:40', '15:40',
        '16:40', '17:40', '18:40', '19:00'
    ];

    const obtenerHorasDisponibles = (dia) => {
        return (dia === 0 || dia === 6) ? horasDeFinDeSemana : horasDeSemana;
    };

    useEffect(() => {
        const diaSemana = fecha.getDay();
        fetchHorasReservadas(fecha, diaSemana);
    }, [fecha]);

    const fetchHorasReservadas = async (fecha, diaSemana) => {
        try {
            const response = await fetch(`http://localhost:3000/api/reservations?fecha=${fecha.toISOString().split('T')[0]}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const reservas = await response.json();
            if (!Array.isArray(reservas)) {
                throw new Error('The response is not an array');
            }

            const horasReservadasDelDia = reservas.reduce((acc, reserva) => {
                acc[reserva.hora] = (acc[reserva.hora] || 0) + 1;
                return acc;
            }, {});

            const horasDisponiblesDelDia = obtenerHorasDisponibles(diaSemana);
            setHorasDisponibles(horasDisponiblesDelDia);
            setHorasReservadas(horasReservadasDelDia);
            setHora(horasDisponiblesDelDia[0] || '');
        } catch (error) {
            console.error('Error al obtener horas reservadas:', error);
            setMensaje('Error al obtener horas reservadas');
        }
    };

    const hoy = new Date();

    const handleSubmit = async (e) => {
        e.preventDefault();


        const fechaFormateada = fecha.toISOString().split('T')[0];


        try {
            const response = await fetch('http://localhost:3000/api/reservations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre,
                    apellidos,
                    phone: telefono, // Añadir el teléfono al cuerpo de la solicitud
                    numeroAdultos,
                    numeroNinos,
                    fecha: fechaFormateada,
                    hora,
                }),
            });



            if (response.ok) {
                const data = await response.json();

                navigate('/confirmation', { state: { numeroReserva: data.data.id } });
            } else {
                const errorData = await response.json();

                setMensaje(`Error: ${errorData.message || 'Error al realizar la reserva'}`);
            }
        } catch (err) {

            setMensaje('Error al realizar la reserva.');
        }
    };

    const handleHoraClick = (horaDisponible) => {
        if (horasReservadas[horaDisponible] >= 15) {
            setMensaje('Hora no disponible.');
        } else {
            setHora(horaDisponible);
            setMensaje('');
        }
    };

    return (
        <section className="h-full w-full text-white">
            <div className="h-[20vh] flex justify-center items-center pt-20 relative bg-main-color z-0">
                <div className="absolute bg-[url(/imgs/bg-nosotros-2.png)] bg-cover bg-fixed opacity-30 inset-0 -z-10"></div>
                <h1 className="text-3xl md:pb-8 md:pt-8 md:text-5xl underline decoration-[#4b2b21] underline-offset-8 decoration-2">
                    Reserva una mesa
                </h1>
            </div>
            <div className="min-h-screen flex flex-col lg:flex-row justify-center items-start relative z-0 bg-main-color p-5">
                <div className="absolute bg-[url(/imgs/bg-nosotros-2.png)] bg-cover bg-fixed inset-0 opacity-30 -z-10"></div>
                <form className="w-full lg:w-1/3 flex flex-col justify-center items-center px-5 space-y-7 bg-gray-900 p-10 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                    <div className="w-full">
                        <label className="block mb-2">Nombre:</label>
                        <input
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg text-black"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label className="block mb-2">Apellidos:</label>
                        <input
                            type="text"
                            value={apellidos}
                            onChange={(e) => setApellidos(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg text-black"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label className="block mb-2">Teléfono:</label> {/* Nuevo campo de teléfono */}
                        <input
                            type="tel"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg text-black"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label className="block mb-2">Número de Adultos:</label>
                        <input
                            type="number"
                            value={numeroAdultos}
                            onChange={(e) => setNumeroAdultos(parseInt(e.target.value, 10))}
                            className="w-full px-3 py-2 border rounded-lg text-black"
                            min="1"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label className="block mb-2">Número de Niños:</label>
                        <input
                            type="number"
                            value={numeroNinos}
                            onChange={(e) => setNumeroNinos(parseInt(e.target.value, 10))}
                            className="w-full px-3 py-2 border rounded-lg text-black"
                            min="0"
                            required
                        />
                    </div>
                    <div className="w-full">
                        <label className="block mb-2  text-center">Fecha:</label>
                        <Calendar
                            value={fecha}
                            onChange={setFecha}
                            minDate={hoy}
                            className="w-full px-3 py-2 border text-center rounded-lg"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block mb-2">Hora:</label>
                        <div className="flex flex-wrap gap-2 hora-buttons">
                            {horasDisponibles.map((horaDisponible) => (
                                <motion.button
                                    key={horaDisponible}
                                    type="button"
                                    onClick={() => handleHoraClick(horaDisponible)}
                                    className={`px-4 py-2 rounded-lg ${horasReservadas[horaDisponible] >= 15
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : hora === horaDisponible
                                            ? 'bg-main-active text-white'
                                            : 'bg-main-default'
                                        } hora-button`}
                                    disabled={horasReservadas[horaDisponible] >= 15}
                                    initial={{ scale: 0.9, rotateY: 0, rotateX: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    whileHover={{
                                        scale: 1.1,
                                        rotateY: -10, // Rotación en el eje Y para efecto 3D
                                        rotateX: 10, // Rotación en el eje X para efecto 3D
                                        transition: { duration: 0.3 }
                                    }}
                                    whileTap={{
                                        scale: 0.95,
                                        rotateY: 0, // Vuelve a la posición original al hacer clic
                                        rotateX: 0, // Vuelve a la posición original al hacer clic
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    {horaDisponible}
                                </motion.button>

                            ))}
                        </div>
                    </div>
                    {mensaje && (
                        <div className="w-full">
                            <p className="text-red-500">{mensaje}</p>
                        </div>
                    )}
                    <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Reservar
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Reservations;
