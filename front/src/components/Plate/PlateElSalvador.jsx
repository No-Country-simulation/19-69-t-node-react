import BgImage from "./components/BgImage";
import Card from "./components/Card";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";

export default function PlateElSalvador() {
  return (
    <section className="relative w-full max-w-full py-32 flex flex-col items-center justify-center z-0 text-white">
      <BgImage bgUrl="bg-[url(/imgs/background-el-salvador.webp)]" />
      <div className="relative z-10 text-center w-full max-w-full">
        <Title title="Platos de El Salvador" />
        <Subtitle subtitle="Platillos" />
        <div className="flex flex-col lg:flex-row flex-grow items-center justify-center gap-14 mt-8 px-4 max-w-full sm:px-14">
          <Card
            imgUrl="/imgs/el-salvador-pupusas.webp"
            imgAlt="Imagen de Tacos al Pastor"
            plateName="Pupusas"
            platePrice="$7.5"
            plateDesc="Tortillas gruesas rellenas de queso, frijoles o chicharrón, servidas con curtido y salsa."
          />
          <Card
            imgUrl="/imgs/el-salvador-yuca-frita.webp"
            imgAlt="Imagen de Totopos con Guacamole"
            plateName="Yuca frita"
            platePrice="$10"
            plateDesc="Yuca frita servida con trozos de chicharrón crujiente y curtido."
          />
        </div>
        <Subtitle subtitle="Bebidas" />
        <div className="flex flex-col lg:flex-row flex-grow items-center justify-center gap-14 mt-8 px-4 max-w-full md:px-14">
          <Card
            imgUrl="/imgs/el-salvador-horchata.webp"
            imgAlt="Imagen de Margarita"
            plateName="Horchata de Morro"
            platePrice="$16"
            plateDesc="Bebida refrescante hecha de semillas de morro, ajonjolí y especias."
          />
          <Card
            imgUrl="/imgs/el-salvador-agua-de-tamarindo.webp"
            imgAlt="Imagen de agua de Jamaica"
            plateName="Agua de Tamarindo"
            platePrice="$18"
            plateDesc="Jugo de tamarindo, dulce y ligeramente ácido, perfecto para acompañar comidas saladas."
          />
        </div>
      </div>
    </section>
  );
}
