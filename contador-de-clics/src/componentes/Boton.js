import React from "react";
import '../hojas-de-estilo/Boton.css';

function Boton({ texto, esBotonDeClic, menejarClic }) {
  return (
    <button
      className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={menejarClic}>
      {texto}
    </button>
  );
}

export default Boton;