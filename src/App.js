import './App.css';
import Header from "./components/Header"
import Logo from "./assets/logo.svg"
import Menu from "./assets/menu.svg"
import Item from "./components/Item"
import ModelS from "./assets/models.jpg"
import ModelX from "./assets/modelx.jpg"
import SolarPanel from "./assets/solar_panel.jpg"
import SolarRoof from "./assets/solar_roof.jpg"
import ModelY from "./assets/modely.jpg"
import Model3 from "./assets/model3.jpg"


function App() {
  return (
    <div className="App">
        <Header logo={Logo} menu={Menu} />

        <div className="item-container">
          <Item heading="Model Y" img={ModelY} />
          <Item heading="Model 3" img={Model3} />
          <Item heading="Model S" img={ModelS} />
          <Item heading="Model X" img={ModelX} />
          <Item heading="Solar Roof" img={SolarRoof} />
          <Item heading="Solar Panel" img={SolarPanel} />

        </div>
    </div>
  );
}

export default App;
