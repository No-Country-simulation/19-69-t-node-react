import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthView } from "./components/AuthView/AuthView";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.css";
import Contact from "./components/Main/Contact/Contact";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <>
      {window.location.pathname !== "/login" &&
      window.location.pathname !== "/contacto" ? (
        <Header />
      ) : null}
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/login" element={<AuthView />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/nosotros" element={<AboutUs />} />
      </Routes>
      {window.location.pathname !== "/login" ? <Footer /> : null}
    </>
  );
}

export default App;
