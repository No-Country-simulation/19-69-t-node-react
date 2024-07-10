import ImageBackground from "./ImageBackground";
import TitleAndDescription from "./TitleAndDescription";
import "../Main/Main.css";

export default function Main() {
  return (
    <main>
      <ImageBackground>
        <TitleAndDescription />
      </ImageBackground>
    </main>
  );
}
