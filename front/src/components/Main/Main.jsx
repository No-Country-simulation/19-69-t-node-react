import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-cover bg-center bg-black z-0">
      <div className="absolute bg-[url(imgs/main-bg.webp)] bg-cover bg-fixed opacity-40 inset-0 -z-10"></div>
      <div className="relative flex flex-col items-center justify-center z-10 text-center text-white">
        <h1 className="text-2xl sm:text-4xl italic font-light animate-slidein opacity-0">
          Bienvenido a
        </h1>
        <h2 className="text-3xl sm:text-5xl md:text-[75px] mt-4 font-bold animate-slidein400 opacity-0">
          EDEN DE SABORES
        </h2>
        <p className="mt-8 sm:mt-6 text-base sm:text-lg w-[95%] sm:w-4/5 animate-slidein800 opacity-0">
          Descubre una experiencia culinaria única donde los sabores de México,
          Argentina, España, El Salvador y Colombia se fusionan.
        </p>
        <div className="animate-appear900 opacity-0 mt-10 text-lg">
          <Link
            to="/menu"
            className="px-3 sm:px-6 py-2 me-5 text-white bg-[#1a1a1a] hover:bg-red-800 border-b border-red-800 rounded-md transition-all"
          >
            Menú
          </Link>
          <Link
            to="/menu"
            className="px-2 sm:px-4 py-2 text-white bg-[#1a1a1a] hover:bg-red-800 border-b border-red-800 rounded-md transition-all"
          >
            Reservar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
