import BgImage from "./components/BgImage";
import Card from "./components/Card";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";

export default function PlateEspaña() {
  return (
    <section className="relative w-full max-w-full py-32 flex flex-col items-center justify-center z-0 text-white">
      <BgImage bgUrl="bg-[url(/imgs/background-españa.webp)]" />
      <div className="relative z-10 text-center w-full max-w-full">
        <Title title="Platos de España" />
        <Subtitle subtitle="Platillos" />
        <div className="flex flex-col lg:flex-row flex-grow items-center justify-center gap-14 mt-8 px-4 max-w-full sm:px-14">
          <Card
            imgUrl="/imgs/españa-tortilla-española.webp"
            imgAlt="Imagen de Tacos al Pastor"
            plateName="Tortilla Española"
            platePrice="$10"
            plateDesc="Tortilla de patatas con cebolla, suave y esponjosa."
          />
          <Card
            imgUrl="/imgs/españa-paaella-valenciana.webp"
            imgAlt="Imagen de Totopos con Guacamole"
            plateName="Paaella Valenciana"
            platePrice="$15"
            plateDesc="Arroz con mariscos, pollo, conejo, judías verdes y azafrán, cocinado a la perfección."
          />
        </div>
        <h2 className="text-3xl font-medium mt-12 uppercase">Bebidas</h2>
        <div className="flex flex-col lg:flex-row flex-grow items-center justify-center gap-14 mt-8 px-4 max-w-full md:px-14">
          <Card
            imgUrl="/imgs/españa-sangria.webp"
            imgAlt="Imagen de Margarita"
            plateName="Sangría"
            platePrice="$20"
            plateDesc="Bebida refrescante de vino tinto, frutas frescas y un toque de brandy."
          />
          <Card
            imgUrl="/imgs/españa-tinto-de-verano.webp"
            imgAlt="Imagen de agua de Jamaica"
            plateName="Tinto de Verano"
            platePrice="$22"
            plateDesc="Vino tinto mezclado con gaseosa de limón, servido bien frío."
          />
        </div>
      </div>
    </section>
  );
}
