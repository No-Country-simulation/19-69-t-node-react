export default function ImageBackground({ children }) {
  return (
    <section className="section-welcome">
      <img
        src="/imgs/bg-image.webp"
        alt="Imagen del background de Eden de Sabores"
        className="background-image"
      />
      <div className="title-desc">{children}</div>
    </section>
  );
}
