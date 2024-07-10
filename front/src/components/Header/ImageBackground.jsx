import "./Header.css";

export default function ImageBackground({ children }) {
  return (
    <section>
      <img
        src="/imgs/bg-image.jpg"
        alt="Imagen del background de Eden de Sabores"
        className="background-image"
      />
      <div className="title-desc">{children}</div>
    </section>
  );
}
