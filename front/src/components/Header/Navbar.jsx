import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/src/components/Header/Logo";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  function handleClick() {
    setShowDropdown(!showDropdown);
  }

  return (
    <>
      <nav className="navbar-content bg-[#1a1a1a]">
        <div className="divisor">
          <Logo />
          <button className="dropdown-toggle" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="40"
              fill="#fff"
              className="navbar-svg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
        </div>
        <ul
          className={`nav-items ${showDropdown ? "isActive bg-[#1a1a1a]" : ""}`}
        >
          <li className="nav-item animate-slidein100 opacity-0 parent-underlinle-animation">
            <Link className="nav-link underline-animation" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item animate-slidein200 opacity-0 parent-underlinle-animation">
            <Link className="nav-link underline-animation" to="/menu">
              Menú
            </Link>
          </li>
          <li className="nav-item animate-slidein200 opacity-0 parent-underlinle-animation">
            <Link className="nav-link underline-animation" to="/reservas">
              Reservar
            </Link>
          </li>
          <li className="nav-item animate-slidein200 opacity-0 parent-underlinle-animation">
            <Link className="nav-link underline-animation" to="/nosotros">
              Nosotros
            </Link>
          </li>
          <li className="nav-item animate-slidein400 opacity-0 parent-underlinle-animation">
            <Link className="nav-link underline-animation" to="/contacto">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
