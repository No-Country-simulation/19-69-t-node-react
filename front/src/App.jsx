import { Route, Routes } from "react-router-dom";
import { AuthView } from "./components/AuthView/AuthView";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Contact from "./components/Main/Contact/Contact";
import AboutUs from "./components/AboutUs/AboutUs";
import Menu from "./components/Menu/Menu";
import PlateMexico from "./components/Plate/PlateMexico";
import PlateColombia from "./components/Plate/PlateColombia";
import PlateElSalvador from "./components/Plate/PlateElSalvador";
import PlateEspaña from "./components/Plate/PlateEspaña";
import PlateArgentina from "./components/Plate/PlateArgentina";
import "./App.css";

function App() {
  return (
    <>
      {window.location.pathname !== "/login" ? <Header /> : null}
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/login" element={<AuthView />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/mexico" element={<PlateMexico />} />
        <Route path="/menu/argentina" element={<PlateArgentina />} />
        <Route path="/menu/colombia" element={<PlateColombia />} />
        <Route path="/menu/el-salvador" element={<PlateElSalvador />} />
        <Route path="/menu/españa" element={<PlateEspaña />} />
      </Routes>
      {window.location.pathname !== "/login" ? <Footer /> : null}
    </>
  );
}

export default App;
