import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Confirmation = () => {
    const location = useLocation();
    const [numeroReserva, setNumeroReserva] = useState(null);

    useEffect(() => {
        if (location.state && location.state.numeroReserva) {
            setNumeroReserva(location.state.numeroReserva);
        }
    }, [location.state]);

    return (
        <section className="min-h-screen flex flex-col text-white bg-main-color">
            <motion.div
                className="confirmation-header h-[30vh] flex justify-center items-center pt-32 w-full relative 2xl:pt-24 " // Ajuste para pantallas grandes
                initial={{ opacity: 0.5, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute bg-cover bg-fixed opacity-30 inset-0 -z-10"></div>
                <h1 className="text-3xl md:text-5xl font-bold text-white relative z-10">
                    Reserva Confirmada
                </h1>
            </motion.div>
            <motion.div
                className="confirmation-content flex flex-col items-center justify-center w-full flex-grow py-8 2xl:py-4" // Ajuste para pantallas grandes
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
            >
                <motion.div
                    className="bg-brown text-gray-800 p-5 rounded-lg shadow-lg w-full md:w-1/2 flex flex-col items-center"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                >
                    <motion.img
                        className="w-72 h-72 object-cover rounded-lg mb-6"
                        src="/imgs/confirmacion.png"
                        alt="Confirmación"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    />
                    <motion.p
                        className="text-lg md:text-xl mb-2 text-white text-center 3xl:mb-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1 }}
                    >
                        ¡Reserva confirmada! Lo esperamos con entusiasmo en compañía de sus seres queridos.
                    </motion.p>
                    <motion.p
                        className="text-xl md:text-2xl font-bold text-white text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        Número de Reserva: {numeroReserva}
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Confirmation;
