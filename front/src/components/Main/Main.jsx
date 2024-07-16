import "../Main/Main.css";
import ImageBackground from "./ImageBackground";
import TitleAndDescription from "./TitleAndDescription";

export default function Main() {
  return (
    <main>
      <ImageBackground>
        <TitleAndDescription />
      </ImageBackground>
    </main>
  );
}
