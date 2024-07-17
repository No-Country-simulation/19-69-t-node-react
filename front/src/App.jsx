import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthView } from "./components/AuthView/AuthView";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.css";
import Contact from "./components/Main/Contact/Contact";

function App() {
  return (
    <>
      {window.location.pathname !== "/login" &&
      window.location.pathname !== "/contact" ? (
        <Header />
      ) : null}
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/login" element={<AuthView />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {window.location.pathname !== "/login" ? <Footer /> : null}
    </>
  );
}

export default App;
