export default function Plate({
  country,
  backgroundUrl,
  firstPlateUrl,
  secondPlateUrl,
  firstDrinkUrl,
  secondDrinkUrl,
  plateTitle,
  plateDescription,
  platePrice,
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
              <h3 className="text-2xl font-bold underline">{plateTitle}</h3>
              <p className="text-2xl text-yellow-600 font-medium">
                {platePrice}
              </p>
            </div>
            <p>{plateDescription}</p>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-[60%] lg:w-[30%] bg-black gap-6 p-7 border-white border-2 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 bg-opacity-70 h-[505] text-pretty">
            <img
              src={secondPlateUrl}
              alt="Imagen de Totopos con Guacamole"
              className="h-[305] max-h-full"
            />
            <div className="flex items-center justify-between w-full">
              <h3 className="text-2xl font-bold underline">{plateTitle}</h3>
              <p className="text-2xl text-yellow-600 font-medium">
                {platePrice}
              </p>
            </div>
            <p>{plateDescription}</p>
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
              <h3 className="text-2xl font-bold underline">{plateTitle}</h3>
              <p className="text-2xl text-yellow-600 font-medium">
                {platePrice}
              </p>
            </div>
            <p>{plateDescription}</p>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-[60%] lg:w-[30%] bg-black gap-6 p-7 border-white border-2 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 bg-opacity-70 h-[505] text-pretty">
            <img
              src={secondDrinkUrl}
              alt="Imagen de agua de Jamaica"
              className="h-[305] max-h-full"
            />
            <div className="flex items-center justify-between w-full">
              <h3 className="text-2xl font-bold underline">{plateTitle}</h3>
              <p className="text-2xl text-yellow-600 font-medium">
                {platePrice}
              </p>
            </div>
            <p>{plateDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
