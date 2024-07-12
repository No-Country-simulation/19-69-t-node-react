import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (

    <div className="flex flex-col min-h-screen">
      <Header />
      <Main />
      <div className="flex-grow"></div> {/* Este div actúa como un espacio flexible */}
      <Footer />
    </div>

  );
}

export default App;
