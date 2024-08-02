import { Link } from "react-router-dom";

const Menu = () => {
  const renderCountries = () => {
    const countries = ["Todos los Países", "Argentina", "Colombia", "El Salvador", "España", "México",];
    return countries.map((country, index) => {
      return (
        <section key={index}>
          <Link to={`/menu/${country.toLowerCase().split(" ").join("-")}`}>
            <img
              className="w-64 h-64 object-contain object mb-3 hover:grayscale hover:brightness-75 transition-all"
              src={`/imgs/${country.toLowerCase().split(" ").join("-")}.png`}
              alt={`Comida ${country}`}
            />
            <h2 className="font-semibold text-gray-100">{country}</h2>
          </Link>
        </section>
      );
    });
  };

  return (
    <section className="h-full relative w-full py-32 bg-main-color z-0 text-white text-center">
      <div className="absolute bg-[url(/imgs/bg-nosotros-2.png)] bg-cover bg-fixed inset-0 opacity-40 -z-10"></div>
      <h1 className="mt-5 mb-24 text-3xl md:text-[2.6rem] underline decoration-[#4b2b21] underline-offset-8 decoration-2">
        Nuestros platos
      </h1>
      <div className="h-full place-items-center grid gap-14 grid-cols-2 sm:grid-cols-3 text-xl px-5 sm:px-0">
        {renderCountries()}
      </div>
    </section>
  );
};

export default Menu;
