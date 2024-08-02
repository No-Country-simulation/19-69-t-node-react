import BgImage from "./components/BgImage";
import Card from "./components/Card";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";

export default function PlateColombia() {
  return (
    <section className="relative w-full max-w-full py-32 flex flex-col items-center justify-center z-0 text-white">
      <BgImage bgUrl="bg-[url(/imgs/background-colombia.webp)]" />
      <div className="relative z-10 text-center w-full max-w-full">
        <Title title="Platos de Colombia" />
        <Subtitle subtitle="Platillos" />
        <div className="flex flex-col lg:flex-row flex-grow items-center justify-center gap-14 mt-8 px-4 max-w-full sm:px-14">
          <Card
            imgUrl="/imgs/colombia-arepas-con-queso.webp"
            imgAlt="Imagen de Tacos al Pastor"
            plateName="Arepas con Queso"
            platePrice="$7"
            plateDesc="Tortillas de maíz rellenas de queso derretido, servidas con mantequilla."
          />
          <Card
            imgUrl="/imgs/colombia-bandeja-paisa.webp"
            imgAlt="Imagen de Totopos con Guacamole"
            plateName="Bandeja Paisa"
            platePrice="$15"
            plateDesc="Frijoles, arroz, carne molida, chicharrón, huevo frito, plátano maduro, arepa y aguacate."
          />
        </div>
        <Subtitle subtitle="Bebidas" />
        <div className="flex flex-col lg:flex-row flex-grow items-center justify-center gap-14 mt-8 px-4 max-w-full md:px-14">
          <Card
            imgUrl="/imgs/colombia-aguapanela.webp"
            imgAlt="Imagen de Margarita"
            plateName="Aguapanela"
            platePrice="$20"
            plateDesc="Bebida refrescante hecha de panela disuelta en agua con limón."
          />
          <Card
            imgUrl="/imgs/colombia-refajo.webp"
            imgAlt="Imagen de agua de Jamaica"
            plateName="Refajo"
            platePrice="$22"
            plateDesc="Mezcla de cerveza y gaseosa, ideal para acompañar platos típicos."
          />
        </div>
      </div>
    </section>
  );
}
