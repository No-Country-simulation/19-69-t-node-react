import Navbar from "./Navbar";
import ImageBackground from "./ImageBackground";
import TitleAndDescription from "./TitleAndDescription";
import "../Header/Header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <ImageBackground>
        <TitleAndDescription />
      </ImageBackground>
    </>
  );
}
