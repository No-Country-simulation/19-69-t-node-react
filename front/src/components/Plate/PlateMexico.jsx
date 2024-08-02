import BgImage from "./components/BgImage";
import Card from "./components/Card";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";

export default function PlateMexico() {
  return (
    <section className="relative w-full max-w-full py-32 flex flex-col items-center justify-center z-0 text-white">
      <BgImage bgUrl="bg-[url(/imgs/background-mexico.webp)]" />
      <div className="relative z-10 text-center w-full max-w-full">
        <Title title="Platos de México" />
        <Subtitle subtitle="Platillos" />
        <div className="flex flex-col lg:flex-row flex-grow items-center justify-center gap-14 mt-8 px-4 max-w-full sm:px-14">
          <Card
            imgUrl="/imgs/mexico-tacos-al-pastor.webp"
            imgAlt="Imagen de Tacos al Pastor"
            plateName="Tacos al Pastor"
            platePrice="$10"
            plateDesc="Tacos de cerdo adobado, servidos con piña,cebolla,cilantro y salsa."
          />
          <Card
            imgUrl="/imgs/mexico-totopos-y-guacamole.webp"
            imgAlt="Imagen de Totopos con Guacamole"
            plateName="Totopos y Guacamole"
            platePrice="$7.5"
            plateDesc="Totopos de pollo, cebolla, tomate, queso y salsa."
          />
        </div>
        <h2 className="text-3xl font-medium mt-12 uppercase">Bebidas</h2>
        <div className="flex flex-col lg:flex-row flex-grow items-center justify-center gap-14 mt-8 px-4 max-w-full md:px-14">
          <Card
            imgUrl="/imgs/mexico-margarita.webp"
            imgAlt="Imagen de Margarita"
            plateName="Margarita"
            platePrice="$20"
            plateDesc="Margarita de limón, mango y kiwi."
          />
          <Card
            imgUrl="/imgs/mexico-agua-de-jamaica.png"
            imgAlt="Imagen de agua de Jamaica"
            plateName="Agua de Jamaica"
            platePrice="$22"
            plateDesc="Agua de Jamaica con limón y piña."
          />
        </div>
      </div>
    </section>
  );
}
