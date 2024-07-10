import Navbar from "./Navbar";
import ImageBackground from "./ImageBackground";
import "../Header/Header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <Navbar />
        <ImageBackground />
      </header>
    </>
  );
}
