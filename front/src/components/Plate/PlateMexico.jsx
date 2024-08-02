export default function PlateMexico() {
  return (
    <section className="relative w-full max-w-full py-32 flex flex-col items-center justify-center z-0 text-white">
      <div
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: `url(/imgs/background-mexico.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.4)",
        }}
      />
      <div className="relative z-10 text-center w-full max-w-full">
        <h1 className="uppercase font-semibold text-4xl ">Platos de México</h1>
        <h2 className="text-3xl font-medium mt-12 uppercase">Platillos</h2>
        <div className="flex flex-col lg:flex-row flex-grow items-center justify-center gap-14 mt-8 px-4 max-w-full sm:px-14">
          <div className="flex flex-col items-center justify-center w-full md:w-[60%] lg:w-[30%] bg-black gap-6 p-7 border-white border-2 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 bg-opacity-70 h-[505] text-pretty">
            <img
              src="/imgs/mexico-tacos-al-pastor.webp"
              alt="Imagen de Tacos al Pastor"
              className="h-[305] max-h-full"
            />
            <div className="flex items-center justify-between w-full">
              <h3 className="text-2xl font-bold underline">Tacos al Pastor</h3>
              <p className="text-2xl text-yellow-600 font-medium">$10</p>
            </div>
            <p>
              Tacos de cerdo adobado, servidos con piña,cebolla,cilantro y
              salsa.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-[60%] lg:w-[30%] bg-black gap-6 p-7 border-white border-2 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 bg-opacity-70 h-[505] text-pretty">
            <img
              src="/imgs/mexico-totopos-y-guacamole.webp"
              alt="Imagen de Totopos con Guacamole"
              className="h-[305] max-h-full"
            />
            <div className="flex items-center justify-between w-full">
              <h3 className="text-2xl font-bold underline">
                Totopos y Guacamole
              </h3>
              <p className="text-2xl text-yellow-600 font-medium">$7.5</p>
            </div>
            <p>Totopos de pollo, cebolla, tomate, queso y salsa.</p>
          </div>
        </div>
        <h2 className="text-3xl font-medium mt-12 uppercase">Bebidas</h2>
        <div className="flex flex-col lg:flex-row flex-grow items-center justify-center gap-14 mt-8 px-4 max-w-full md:px-14">
          <div className="flex flex-col items-center justify-center w-full md:w-[60%] lg:w-[30%] bg-black gap-6 p-7 border-white border-2 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 bg-opacity-70 h-[505] text-pretty">
            <img
              src="/imgs/mexico-margarita.webp"
              alt="Imagen de Margarita"
              className="h-[305] max-h-full"
            />
            <div className="flex items-center justify-between w-full">
              <h3 className="text-2xl font-bold underline">Margarita</h3>
              <p className="text-2xl text-yellow-600 font-medium">$20</p>
            </div>
            <p>Margarita de limón, mango y kiwi.</p>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-[60%] lg:w-[30%] bg-black gap-6 p-7 border-white border-2 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 bg-opacity-70 h-[505] text-pretty">
            <img
              src="/imgs/mexico-agua-de-jamaica.png"
              alt="Imagen de agua de Jamaica"
              className="h-[305] max-h-full"
            />
            <div className="flex items-center justify-between w-full">
              <h3 className="text-2xl font-bold underline">Agua de Jamaica</h3>
              <p className="text-2xl text-yellow-600 font-medium">$22</p>
            </div>
            <p>Agua de Jamaica con limón y piña.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
