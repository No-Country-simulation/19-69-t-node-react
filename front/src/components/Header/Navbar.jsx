import { useState } from "react";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  function handleClick() {
    setShowDropdown(!showDropdown);
  }

  return (
    <>
      <nav className="navbar-content bg-secondary-color/80">
        <div className="divisor">
          <h2 className="nav-title text-white">Edén de Sabores</h2>
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
        <ul className={`nav-items ${showDropdown ? "isActive bg-secondary-color/80" : ""}`}>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Platos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Reservas
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
