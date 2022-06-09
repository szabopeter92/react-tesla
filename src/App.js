import './App.css';
import Header from './components/Header';
import Item from './components/Item';
import Logo from './assets/logo.svg';
import Menu from './assets/menu.svg';
import ModelS from './assets/models.jpg';
import ModelX from './assets/modelx.jpg';
import SolarPanel from './assets/solar_panel.jpg';
import SolarRoof from './assets/solar_roof.jpg';


function App() {
  return (
    <div className="App">
      <Header 
          logo={Logo}
          menu={Menu}
      />
      <div className="container">
        <Item 
            title="Model S"
            img={ModelS}
    
        />
        <Item 
            title="Model X"
            img={ModelX}
        />

        <Item 
            title="Solar Panel"
            img={SolarPanel}
        />
        <Item 
            title="Solar Roof"
            img={SolarRoof}
        />
      </div>
    </div>
  );
}

export default App;
