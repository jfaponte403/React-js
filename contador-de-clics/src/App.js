import './App.css';
import contadorDeClickLogo from './img/contador-de-click-logo.png';
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import { useState } from "react";


function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="contador-clics-logo-contenedor">
        <img className="contador-clics-logo"
             src={contadorDeClickLogo}
             alt="logo principal"/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics= {numClics} />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          menejarClic={manejarClic} />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          menejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
