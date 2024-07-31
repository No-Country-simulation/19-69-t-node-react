export default function PlateEspaña({
  country, // nombre del pais
  backgroundUrl, // url de la imagen de fondo
  firstPlateUrl, // url de la primera imagen de platillo
  firstDrinkUrl, // url de la primera imagen de bebida
  firstPlateTitle, // titulo de la primera imagen de platillo
  firstPlateDescription, // descripcion de la primera imagen de platillo
  firstPlatePrice, // precio de la primera imagen de platillo
  secondPlateUrl, // url de la segunda imagen de platillo
  secondPlateTitle, // titulo de la segunda imagen de platillo
  secondPlateDescription, // descripcion de la segunda imagen de platillo
  secondPlatePrice, // precio de la segunda imagen de platillo
  secondDrinkUrl, // url de la segunda imagen de bebida
  firstDrinkTitle, // titulo de la primera imagen de bebida
  secondDrinkTitle, // titulo de la segunda imagen de bebida
  firstDrinkPrice, // precio de la primera imagen de bebida
  secondDrinkPrice, // precio de la segunda imagen de bebida
  firstDrinkDescription, // descripcion de la primera imagen de bebida
  secondDrinkDescription, // descripcion de la segunda imagen de bebida
}) {
  return (
    <section className="relative w-full max-w-full py-32 flex flex-col items-center justify-center z-0 text-white">
      <div
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.4)",
        }}
      />
      <div className="relative z-10 text-center w-full max-w-full">
        <h1 className="uppercase font-semibold text-4xl ">
          Platos de {country}
        </h1>
        <h2 className="text-3xl font-medium mt-12 uppercase">Platillos</h2>
        <div className="flex flex-col lg:flex-row flex-grow items-center justify-center gap-14 mt-8 px-4 max-w-full sm:px-14">
          <div className="flex flex-col items-center justify-center w-full md:w-[60%] lg:w-[30%] bg-black gap-6 p-7 border-white border-2 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 bg-opacity-70 h-[505] text-pretty">
            <img
              src={firstPlateUrl}
              alt="Imagen de Tacos al Pastor"
              className="h-[305] max-h-full"
            />
            <div className="flex items-center justify-between w-full">
              <h3 className="text-2xl font-bold underline">
                {firstPlateTitle}
              </h3>
              <p className="text-2xl text-yellow-600 font-medium">
                {firstPlatePrice}
              </p>
            </div>
            <p>{firstPlateDescription}</p>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-[60%] lg:w-[30%] bg-black gap-6 p-7 border-white border-2 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 bg-opacity-70 h-[505] text-pretty">
            <img
              src={secondPlateUrl}
              alt="Imagen de Totopos con Guacamole"
              className="h-[305] max-h-full"
            />
            <div className="flex items-center justify-between w-full">
              <h3 className="text-2xl font-bold underline">
                {secondPlateTitle}
              </h3>
              <p className="text-2xl text-yellow-600 font-medium">
                {secondPlatePrice}
              </p>
            </div>
            <p>{secondPlateDescription}</p>
          </div>
        </div>
        <h2 className="text-3xl font-medium mt-12 uppercase">Bebidas</h2>
        <div className="flex flex-col lg:flex-row flex-grow items-center justify-center gap-14 mt-8 px-4 max-w-full md:px-14">
          <div className="flex flex-col items-center justify-center w-full md:w-[60%] lg:w-[30%] bg-black gap-6 p-7 border-white border-2 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 bg-opacity-70 h-[505] text-pretty">
            <img
              src={firstDrinkUrl}
              alt="Imagen de Margarita"
              className="h-[305] max-h-full"
            />
            <div className="flex items-center justify-between w-full">
              <h3 className="text-2xl font-bold underline">
                {firstDrinkTitle}
              </h3>
              <p className="text-2xl text-yellow-600 font-medium">
                {firstDrinkPrice}
              </p>
            </div>
            <p>{firstDrinkDescription}</p>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-[60%] lg:w-[30%] bg-black gap-6 p-7 border-white border-2 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 bg-opacity-70 h-[505] text-pretty">
            <img
              src={secondDrinkUrl}
              alt="Imagen de agua de Jamaica"
              className="h-[305] max-h-full"
            />
            <div className="flex items-center justify-between w-full">
              <h3 className="text-2xl font-bold underline">
                {secondDrinkTitle}
              </h3>
              <p className="text-2xl text-yellow-600 font-medium">
                {secondDrinkPrice}
              </p>
            </div>
            <p>{secondDrinkDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
