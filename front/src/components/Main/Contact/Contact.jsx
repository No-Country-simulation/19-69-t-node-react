import FormContact from "./FormContact";
import LocationMap from "./LocationMap";

export default function Contact() {
  return (
    <section className="bg-main-color text-white py-16 px-4 md:px-10 md:h-screen">
      <div className="relative top-16">
        <div>
          <h1 className="uppercase">Contact</h1>
          <p className="text-4xl font-medium">Contactanos</p>
        </div>
        <FormContact />
        <LocationMap />
      </div>
    </section>
  );
}
