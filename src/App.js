import React from "react";
import "./App.css";
import Slider from "@material-ui/core/Slider";

function valuetext(value) {
  return `${value}°C`;
}

export default function App() {
  //1. Agregar los estados para convertir los grados centigrados en grados farenheit

  const cambiarGrados = (evento, valor) => {
    //2. Completar la logica para actualizar el estado de centigrados y farenheit y convertir el valor en grados centigrados a grados farenheit
  };

  return (
    <div className="App">
      <div className="temperature">
        <h1>Convertir °C a °F</h1>
        <h5>{0}°F</h5>
        {
          //3. Definir los props faltantes para el componente Slider
        }
        <Slider
          defaultValue={0}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
          onChange="funcion"
        />
      </div>
    </div>
  );
}
