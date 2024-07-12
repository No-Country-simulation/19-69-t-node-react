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
      <div className="flex flex-col min-h-screen">
        <Header />
        <Main />
        <div className="flex-grow"></div> {/* Este div actúa como un espacio flexible */}
        <Footer />
      </div>

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/login" element={<AuthView />} />
      </Routes>

    </>

  );
}

export default App;
