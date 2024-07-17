import FormContact from "./FormContact";
import LocationMap from "./LocationMap";

export default function Contact() {
  return (
    <section className="bg-custom-100 text-white py-5 pt-10 px-3 md:px-5 lg:px-10">
      <div>
        <h1 className="uppercase">Contact</h1>
        <p className="text-4xl font-medium">Contactanos</p>
      </div>
      <FormContact />
      <LocationMap />
    </section>
  );
}
