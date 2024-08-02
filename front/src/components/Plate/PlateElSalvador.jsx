export default function PlateElSalvador() {
  return (
    <section className="relative w-full max-w-full py-32 flex flex-col items-center justify-center z-0 text-white">
      <div
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: `url(/imgs/background-el-salvador.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.4)",
        }}
      />
      <div className="relative z-10 text-center w-full max-w-full">
        <h1 className="uppercase font-semibold text-4xl ">
          Platos de El Salvador
        </h1>
        <h2 className="text-3xl font-medium mt-12 uppercase">Platillos</h2>
        <div className="flex flex-col lg:flex-row flex-grow items-center justify-center gap-14 mt-8 px-4 max-w-full sm:px-14">
          <div className="flex flex-col items-center justify-center w-full md:w-[60%] lg:w-[30%] bg-black gap-6 p-7 border-white border-2 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 bg-opacity-70 h-[505] text-pretty">
            <img
              src="/imgs/el-salvador-pupusas.webp"
              alt="Imagen de Tacos al Pastor"
              className="h-[305] max-h-full"
            />
            <div className="flex items-center justify-between w-full">
              <h3 className="text-2xl font-bold underline">Pupusas</h3>
              <p className="text-2xl text-yellow-600 font-medium">$7.5</p>
            </div>
            <p>
              Tortillas gruesas rellenas de queso, frijoles o chicharrón,
              servidas con curtido y salsa.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-[60%] lg:w-[30%] bg-black gap-6 p-7 border-white border-2 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 bg-opacity-70 h-[505] text-pretty">
            <img
              src="/imgs/el-salvador-yuca-frita.webp"
              alt="Imagen de Totopos con Guacamole"
              className="h-[305] max-h-full"
            />
            <div className="flex items-center justify-between w-full">
              <h3 className="text-2xl font-bold underline">Yuca frita</h3>
              <p className="text-2xl text-yellow-600 font-medium">$10</p>
            </div>
            <p>
              Yuca frita servida con trozos de chicharrón crujiente y curtido.
            </p>
          </div>
        </div>
        <h2 className="text-3xl font-medium mt-12 uppercase">Bebidas</h2>
        <div className="flex flex-col lg:flex-row flex-grow items-center justify-center gap-14 mt-8 px-4 max-w-full md:px-14">
          <div className="flex flex-col items-center justify-center w-full md:w-[60%] lg:w-[30%] bg-black gap-6 p-7 border-white border-2 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 bg-opacity-70 h-[505] text-pretty">
            <img
              src="/imgs/el-salvador-horchata.webp"
              alt="Imagen de Margarita"
              className="h-[305] max-h-full"
            />
            <div className="flex items-center justify-between w-full">
              <h3 className="text-2xl font-bold underline">
                Horchata de Morro
              </h3>
              <p className="text-2xl text-yellow-600 font-medium">$16</p>
            </div>
            <p>
              Bebida refrescante hecha de semillas de morro, ajonjolí y
              especias.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-[60%] lg:w-[30%] bg-black gap-6 p-7 border-white border-2 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 bg-opacity-70 h-[505] text-pretty">
            <img
              src="/imgs/el-salvador-agua-de-tamarindo.webp"
              alt="Imagen de agua de Jamaica"
              className="h-[305] max-h-full"
            />
            <div className="flex items-center justify-between w-full">
              <h3 className="text-2xl font-bold underline">
                Agua de Tamarindo
              </h3>
              <p className="text-2xl text-yellow-600 font-medium">$18</p>
            </div>
            <p>
              Jugo de tamarindo, dulce y ligeramente ácido, perfecto para
              acompañar comidas saladas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
