import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthView } from "./components/AuthView/AuthView";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
// import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/login" element={<AuthView />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
