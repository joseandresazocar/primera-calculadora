import React from "react";
import '../estilos/Boton.css';

function Igual(props) {
  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };
  return (
    <div 
      className={`igual ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
    
  );
}

export default Igual;