import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import { AuthView } from "./components/AuthView/AuthView";
import Confirmation from "./components/Confirmation/Confirmation";
import ErrorConfirmation from "./components/Confirmation/ErrorConfirmation";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Contact from "./components/Main/Contact/Contact";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";
import PlateArgentina from "./components/Plate/PlateArgentina";
import PlateColombia from "./components/Plate/PlateColombia";
import PlateElSalvador from "./components/Plate/PlateElSalvador";
import PlateEspaña from "./components/Plate/PlateEspaña";
import PlateMexico from "./components/Plate/PlateMexico";
import Reservations from "./components/Reservations/Reservations";
import AllCountries from "./components/Plate/AllCountries";

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
        <Route path="/menu/todos-los-países" element={<AllCountries />} />
        <Route path="/menu/mexico" element={<PlateMexico />} />
        <Route path="/menu/argentina" element={<PlateArgentina />} />
        <Route path="/menu/colombia" element={<PlateColombia />} />
        <Route path="/menu/el-salvador" element={<PlateElSalvador />} />
        <Route path="/menu/españa" element={<PlateEspaña />} />
        <Route path="/reservas" element={<Reservations />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/error-confirmation" element={<ErrorConfirmation />} />
      </Routes>
      {window.location.pathname !== "/login" ? <Footer /> : null}
    </>
  );
}

export default App;
