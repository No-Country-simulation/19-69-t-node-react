import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthView } from "./components/AuthView/AuthView";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.css";
import Contact from "./components/Main/Contact/Contact";
import AboutUs from "./components/AboutUs/AboutUs";
import Menu from "./components/Menu/Menu";
import PlateComponent from "./components/Plate/PlateComponent";

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
        <Route path="/menu/mexico" element={<PlateComponent />} />
        <Route path="/menu/argentina" element={<PlateComponent />} />
        <Route path="/menu/colombia" element={<PlateComponent />} />
        <Route path="/menu/el-salvador" element={<PlateComponent />} />
        <Route path="/menu/españa" element={<PlateComponent />} />
      </Routes>
      {window.location.pathname !== "/login" ? <Footer /> : null}
    </>
  );
}

export default App;
