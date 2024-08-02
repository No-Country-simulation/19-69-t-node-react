import BgImage from "./components/BgImage";
import Card from "./components/Card";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";

export default function PlateArgentina() {
  return (
    <section className="relative w-full max-w-full py-32 flex flex-col items-center justify-center z-0 text-white">
      <BgImage bgUrl="bg-[url(/imgs/background-argentina.webp)]" />
      <div className="relative z-10 text-center w-full max-w-full">
        <Title title="Platos de Argentina" />
        <Subtitle subtitle="Platillos" />
        <div className="flex flex-col lg:flex-row flex-grow items-center justify-center gap-14 mt-8 px-4 max-w-full sm:px-14">
          <Card
            imgUrl="/imgs/argentina-asado.webp"
            imgAlt="Imagen de Tacos al Pastor"
            plateName="Asado"
            platePrice="$20"
            plateDesc="Carnes a la parrilla acompañadas de chimichurri y ensaladas frescas."
          />
          <Card
            imgUrl="/imgs/argentina-empanadas.webp"
            imgAlt="Imagen de Totopos con Guacamole"
            plateName="Empanadas"
            platePrice="$15"
            plateDesc="Masa rellena de carne, pollo o jamón y queso, cocinada al horno o frita."
          />
        </div>
        <Subtitle subtitle="Bebidas" />
        <div className="flex flex-col lg:flex-row flex-grow items-center justify-center gap-14 mt-8 px-4 max-w-full md:px-14">
          <Card
            imgUrl="/imgs/argentina-fernet-con-coca.webp"
            imgAlt="Imagen de Margarita"
            plateName="Fernet con Coca"
            platePrice="$20"
            plateDesc="Fernet con Coca-Cola, una bebida clásica y refrescante."
          />
          <Card
            imgUrl="/imgs/argentina-malbec.webp"
            imgAlt="Imagen de agua de Jamaica"
            plateName="Malbec"
            platePrice="$30"
            plateDesc="Vino tinto argentino, perfecto para acompañar carnes a la parrilla."
          />
        </div>
      </div>
    </section>
  );
}
