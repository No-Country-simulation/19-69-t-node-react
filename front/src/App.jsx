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
        <Route
          path="/menu/mexico"
          element={
            <PlateMexico
              country="Mexico"
              backgroundUrl={"/imgs/background-mexico.webp"}
              firstPlateUrl={"/imgs/mexico-tacos-al-pastor.webp"}
              secondPlateUrl={"/imgs/mexico-totopos-y-guacamole.webp"}
              firstDrinkUrl={"/imgs/mexico-margarita.webp"}
              secondDrinkUrl={"/imgs/mexico-agua-de-jamaica.png"}
              firstPlateTitle="Tacos al Pastor"
              firstPlateDescription="Tacos de cerdo adobado, servidos con piña,cebolla,cilantro y salsa."
              firstPlatePrice="10$"
              secondPlateTitle="Totopos y Guacamole"
              secondPlateDescription="Totopos de pollo, cebolla, tomate, queso y salsa."
              secondPlatePrice="7.5$"
              firstDrinkTitle="Margarita"
              firstDrinkDescription="Margarita de limón, mango y kiwi."
              firstDrinkPrice="20$"
              secondDrinkTitle="Agua de Jamaica"
              secondDrinkDescription="Agua de Jamaica con limón y piña."
              secondDrinkPrice="22$"
            />
          }
        />
        <Route
          path="/menu/argentina"
          element={
            <PlateArgentina
              country="Argentina"
              backgroundUrl={"/imgs/background-argentina.webp"}
              firstPlateUrl={"/imgs/argentina-asado.webp"}
              secondPlateUrl={"/imgs/argentina-empanadas.webp"}
              firstDrinkUrl={"/imgs/argentina-fernet-con-coca.webp"}
              secondDrinkUrl={"/imgs/argentina-malbec.webp"}
              firstPlateTitle="Asado"
              firstPlateDescription="Carnes a la parrilla acompañadas de chimichurri y ensaladas frescas."
              firstPlatePrice="20$"
              secondPlateTitle="Empanadas"
              secondPlateDescription="Masa rellena de carne, pollo o jamón y queso, cocinada al horno o frita."
              secondPlatePrice="15$"
              firstDrinkTitle="Fernet con Coca"
              firstDrinkDescription="Fernet con Coca-Cola, una bebida clásica y refrescante."
              firstDrinkPrice="20$"
              secondDrinkTitle="Malbec"
              secondDrinkDescription="Vino tinto argentino, perfecto para acompañar carnes a la parrilla."
              secondDrinkPrice="30$"
            />
          }
        />
        <Route
          path="/menu/colombia"
          element={
            <PlateColombia
              country="Colombia"
              backgroundUrl={"/imgs/background-colombia.webp"}
              firstPlateUrl={"/imgs/colombia-arepas-con-queso.webp"}
              secondPlateUrl={"/imgs/colombia-bandeja-paisa.webp"}
              firstDrinkUrl={"/imgs/colombia-aguapanela.webp"}
              secondDrinkUrl={"/imgs/colombia-refajo.webp"}
              firstPlateTitle="Arepas con Queso"
              firstPlateDescription="Tortillas de maíz rellenas de queso derretido, servidas con mantequilla."
              firstPlatePrice="7$"
              secondPlateTitle="Bandeja Paisa"
              secondPlateDescription="Frijoles, arroz, carne molida, chicharrón, huevo frito, plátano maduro, arepa y aguacate."
              secondPlatePrice="15$"
              firstDrinkTitle="Aguapanela"
              firstDrinkDescription="Bebida refrescante hecha de panela disuelta en agua con limón."
              firstDrinkPrice="20$"
              secondDrinkTitle="Refajo"
              secondDrinkDescription="Mezcla de cerveza y gaseosa, ideal para acompañar platos típicos."
              secondDrinkPrice="22$"
            />
          }
        />
        <Route
          path="/menu/el-salvador"
          element={
            <PlateElSalvador
              country="El Salvador"
              backgroundUrl={"/imgs/background-el-salvador.webp"}
              firstPlateUrl={"/imgs/el-salvador-pupusas.webp"}
              secondPlateUrl={"/imgs/el-salvador-yuca-frita.webp"}
              firstDrinkUrl={"/imgs/el-salvador-horchata.webp"}
              secondDrinkUrl={"/imgs/el-salvador-agua-de-tamarindo.webp"}
              firstPlateTitle="Pupusas"
              firstPlateDescription="Tortillas gruesas rellenas de queso, frijoles o chicharrón, servidas con curtido y salsa."
              firstPlatePrice="7.5$"
              secondPlateTitle="Yuca frita"
              secondPlateDescription="Yuca frita servida con trozos de chicharrón crujiente y curtido."
              secondPlatePrice="10$"
              firstDrinkTitle="Horchata de Morro"
              firstDrinkDescription="Bebida refrescante hecha de semillas de morro, ajonjolí y especias."
              firstDrinkPrice="16$"
              secondDrinkTitle="Agua de Tamarindo"
              secondDrinkDescription="Jugo de tamarindo, dulce y ligeramente ácido, perfecto para acompañar comidas saladas."
              secondDrinkPrice="18$"
            />
          }
        />
        <Route
          path="/menu/españa"
          element={
            <PlateEspaña
              country="España"
              backgroundUrl={"/imgs/background-españa.webp"}
              firstPlateUrl={"/imgs/españa-tortilla-española.webp"}
              secondPlateUrl={"/imgs/españa-paaella-valenciana.webp"}
              firstDrinkUrl={"/imgs/españa-sangria.webp"}
              secondDrinkUrl={"/imgs/españa-tinto-de-verano.webp"}
              firstPlateTitle="Tortilla Española"
              firstPlateDescription="Tortilla de patatas con cebolla, suave y esponjosa."
              firstPlatePrice="10$"
              secondPlateTitle="Paaella Valenciana"
              secondPlateDescription="Arroz con mariscos, pollo, conejo, judías verdes y azafrán, cocinado a la perfección."
              secondPlatePrice="15$"
              firstDrinkTitle="Sangría"
              firstDrinkDescription="Bebida refrescante de vino tinto, frutas frescas y un toque de brandy."
              firstDrinkPrice="20$"
              secondDrinkTitle="Tinto de Verano"
              secondDrinkDescription="Vino tinto mezclado con gaseosa de limón, servido bien frío."
              secondDrinkPrice="22$"
            />
          }
        />
      </Routes>
      {window.location.pathname !== "/login" ? <Footer /> : null}
    </>
  );
}

export default App;
