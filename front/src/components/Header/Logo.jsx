import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="logo-container">
      <Link to="/">
        <img
          src="/imgs/logo-principal.webp"
          alt="Logo de Edén de Sabores"
          className="logo w-20 h-20 rounded-full"
        />
      </Link>
    </div>
  );
}
