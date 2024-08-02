export default function PlateArgentina() {
  return (
    <section className="relative w-full max-w-full py-32 flex flex-col items-center justify-center z-0 text-white">
      <div
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: `url(/imgs/background-argentina.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.4)",
        }}
      />
      <div className="relative z-10 text-center w-full max-w-full">
        <h1 className="uppercase font-semibold text-4xl ">
          Platos de Argentina
        </h1>
        <h2 className="text-3xl font-medium mt-12 uppercase">Platillos</h2>
        <div className="flex flex-col lg:flex-row flex-grow items-center justify-center gap-14 mt-8 px-4 max-w-full sm:px-14">
          <div className="flex flex-col items-center justify-center w-full md:w-[60%] lg:w-[30%] bg-black gap-6 p-7 border-white border-2 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 bg-opacity-70 h-[505] text-pretty">
            <img
              src="/imgs/argentina-asado.webp"
              alt="Imagen de Tacos al Pastor"
              className="h-[305] max-h-full"
            />
            <div className="flex items-center justify-between w-full">
              <h3 className="text-2xl font-bold underline">Asado</h3>
              <p className="text-2xl text-yellow-600 font-medium">$20</p>
            </div>
            <p>
              Carnes a la parrilla acompañadas de chimichurri y ensaladas
              frescas."
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-[60%] lg:w-[30%] bg-black gap-6 p-7 border-white border-2 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 bg-opacity-70 h-[505] text-pretty">
            <img
              src="/imgs/argentina-empanadas.webp"
              alt="Imagen de Totopos con Guacamole"
              className="h-[305] max-h-full"
            />
            <div className="flex items-center justify-between w-full">
              <h3 className="text-2xl font-bold underline">Empanadas</h3>
              <p className="text-2xl text-yellow-600 font-medium">$15</p>
            </div>
            <p>
              Masa rellena de carne, pollo o jamón y queso, cocinada al horno o
              frita.
            </p>
          </div>
        </div>
        <h2 className="text-3xl font-medium mt-12 uppercase">Bebidas</h2>
        <div className="flex flex-col lg:flex-row flex-grow items-center justify-center gap-14 mt-8 px-4 max-w-full md:px-14">
          <div className="flex flex-col items-center justify-center w-full md:w-[60%] lg:w-[30%] bg-black gap-6 p-7 border-white border-2 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 bg-opacity-70 h-[505] text-pretty">
            <img
              src="/imgs/argentina-fernet-con-coca.webp"
              alt="Imagen de Margarita"
              className="h-[305] max-h-full"
            />
            <div className="flex items-center justify-between w-full">
              <h3 className="text-2xl font-bold underline">Fernet con Coca</h3>
              <p className="text-2xl text-yellow-600 font-medium">$20</p>
            </div>
            <p>Fernet con Coca-Cola, una bebida clásica y refrescante.</p>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-[60%] lg:w-[30%] bg-black gap-6 p-7 border-white border-2 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 bg-opacity-70 h-[505] text-pretty">
            <img
              src="/imgs/argentina-malbec.webp"
              alt="Imagen de agua de Jamaica"
              className="h-[305] max-h-full"
            />
            <div className="flex items-center justify-between w-full">
              <h3 className="text-2xl font-bold underline">Malbec</h3>
              <p className="text-2xl text-yellow-600 font-medium">$30</p>
            </div>
            <p>
              Vino tinto argentino, perfecto para acompañar carnes a la
              parrilla.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
