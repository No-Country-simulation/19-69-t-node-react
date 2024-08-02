export default function PlateColombia() {
  return (
    <section className="relative w-full max-w-full py-32 flex flex-col items-center justify-center z-0 text-white">
      <div
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: `url(/imgs/background-colombia.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.4)",
        }}
      />
      <div className="relative z-10 text-center w-full max-w-full">
        <h1 className="uppercase font-semibold text-4xl ">
          Platos de Colombia
        </h1>
        <h2 className="text-3xl font-medium mt-12 uppercase">Platillos</h2>
        <div className="flex flex-col lg:flex-row flex-grow items-center justify-center gap-14 mt-8 px-4 max-w-full sm:px-14">
          <div className="flex flex-col items-center justify-center w-full md:w-[60%] lg:w-[30%] bg-black gap-6 p-7 border-white border-2 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 bg-opacity-70 h-[505] text-pretty">
            <img
              src="/imgs/colombia-arepas-con-queso.webp"
              alt="Imagen de Tacos al Pastor"
              className="h-[305] max-h-full"
            />
            <div className="flex items-center justify-between w-full">
              <h3 className="text-2xl font-bold underline">Arepas con Queso</h3>
              <p className="text-2xl text-yellow-600 font-medium">$7</p>
            </div>
            <p>
              Tortillas de maíz rellenas de queso derretido, servidas con
              mantequilla.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-[60%] lg:w-[30%] bg-black gap-6 p-7 border-white border-2 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 bg-opacity-70 h-[505] text-pretty">
            <img
              src="/imgs/colombia-bandeja-paisa.webp"
              alt="Imagen de Totopos con Guacamole"
              className="h-[305] max-h-full"
            />
            <div className="flex items-center justify-between w-full">
              <h3 className="text-2xl font-bold underline">Bandeja Paisa</h3>
              <p className="text-2xl text-yellow-600 font-medium">$15</p>
            </div>
            <p>
              Frijoles, arroz, carne molida, chicharrón, huevo frito, plátano
              maduro, arepa y aguacate.
            </p>
          </div>
        </div>
        <h2 className="text-3xl font-medium mt-12 uppercase">Bebidas</h2>
        <div className="flex flex-col lg:flex-row flex-grow items-center justify-center gap-14 mt-8 px-4 max-w-full md:px-14">
          <div className="flex flex-col items-center justify-center w-full md:w-[60%] lg:w-[30%] bg-black gap-6 p-7 border-white border-2 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 bg-opacity-70 h-[505] text-pretty">
            <img
              src="/imgs/colombia-aguapanela.webp"
              alt="Imagen de Margarita"
              className="h-[305] max-h-full"
            />
            <div className="flex items-center justify-between w-full">
              <h3 className="text-2xl font-bold underline">Aguapanela</h3>
              <p className="text-2xl text-yellow-600 font-medium">$20</p>
            </div>
            <p>
              Bebida refrescante hecha de panela disuelta en agua con limón.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-[60%] lg:w-[30%] bg-black gap-6 p-7 border-white border-2 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 bg-opacity-70 h-[505] text-pretty">
            <img
              src="/imgs/colombia-refajo.webp"
              alt="Imagen de agua de Jamaica"
              className="h-[305] max-h-full"
            />
            <div className="flex items-center justify-between w-full">
              <h3 className="text-2xl font-bold underline">Refajo</h3>
              <p className="text-2xl text-yellow-600 font-medium">$22</p>
            </div>
            <p>
              Mezcla de cerveza y gaseosa, ideal para acompañar platos típicos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
