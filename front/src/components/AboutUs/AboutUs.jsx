const AboutUs = () => {
  return (
    <section className="h-full w-full text-white">
      <div className="h-[30vh] flex justify-center items-center pt-32 relative bg-main-color z-0">
        <div className="absolute bg-[url(/imgs/bg-nosotros-2.png)] bg-cover bg-fixed opacity-30 inset-0 -z-10"></div>
        <h1 className="text-3xl md:text-5xl underline decoration-[#4b2b21] underline-offset-8 decoration-2">
          Sobre nosotros
        </h1>
      </div>
      <div className="h-screen flex flex-col md:flex-row relative z-0 bg-main-color">
        <div className="absolute bg-[url(/imgs/bg-nosotros-2.png)] bg-cover bg-fixed inset-0 opacity-30 -z-10"></div>
        <article className="w-full md:w-1/2 flex flex-col justify-center items-center px-5 md:ps-10 space-y-7">
          <h1 className="text-3xl pt-10 md:pt-0 md:text-4xl underline md:self-start md:ms-24 decoration-[#4b2b21] underline-offset-8 decoration-1">¿Que ofrecemos?</h1>
          <p className="w-full md:w-3/4 text-xl md:ps-4 text-center md:text-left md:text-pretty">
            En Sabores del Eden, ofrecemos platillos de alta calidad que
            representan la riqueza y diversidad de la gastronomía latina. Cada
            uno de nuestros platos está preparado con ingredientes frescos y
            auténticos, garantizando una experiencia culinaria inigualable.
          </p>
        </article>
        <picture className="md:w-1/2 flex items-center justify-center">
          <img
            className="w-3/4 sm:w-1/2 xl:w-3/5 h-3/5 object-cover rounded-lg"
            src="/imgs/img-nosotros.jfif"
            alt="Plato que ofrecemos"
          />
        </picture>
      </div>
      <div className="h-screen flex flex-col md:flex-row relative z-0 bg-main-color">
        <div className="absolute bg-[url(/imgs/bg-nosotros-3.png)] bg-right inset-0 opacity-20 -z-10"></div>
        <picture className="md:w-1/2 pt-20 md:pt-0 flex items-center justify-center">
          <img
            className="w-3/4 xl:w-3/5 h-3/5 object-cover rounded-lg"
            src="/imgs/img-nosotros-2.jfif"
            alt="Plato que ofrecemos"
          />
        </picture>
        <article className="w-full text-center md:w-1/2 flex flex-col justify-center items-center px-5 md:pe-10 space-y-7">
          <h1 className="text-3xl md:text-4xl md:self-end md:me-24 underline decoration-[#4b2b21] underline-offset-8 decoration-1">Nuestro compromiso</h1>
          <p className="w-full md:w-3/4 text-xl text-center md:text-left text-pretty">
            Nos comprometemos a brindarte no solo una comida excepcional, sino
            también un ambiente cálido y acogedor donde puedas relajarte y
            disfrutar con tus seres queridos.
          </p>
          <p className="w-full md:w-3/4 text-xl text-center md:text-left text-pretty">
            Queremos ser el lugar al que siempre quieras volver para celebrar,
            compartir y crear nuevos recuerdos.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutUs;
