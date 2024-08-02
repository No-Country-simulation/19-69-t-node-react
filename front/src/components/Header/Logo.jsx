import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="logo-container"> 
      <Link to="/" className="flex items-center gap-3">
        <img
          src="/imgs/logo-principal.webp"
          alt="Logo de Edén de Sabores"
          className="logo w-20 h-20 rounded-full"
        />
      <h1 className="text-xl font-semibold text-gray-100 underline decoration-1 underline-offset-4 decoration-red-500/80">Edén de sabores</h1>
      </Link>
    </div>
  );
}
