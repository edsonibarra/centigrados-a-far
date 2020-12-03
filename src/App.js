import React, {useState} from "react";
import "./App.css";
import Slider from "@material-ui/core/Slider";

function valuetext(value) {
  return `${value}°C`;
}
//Formula para convertir centigrados a farenheit. 
// ( C * 9/5 ) + 32 = F

export default function App() {
  //1. Agregar los estados para convertir los grados centigrados en grados farenheit
  const[c, setC] = useState(10)
  let gradosFar = (c * 9/5) + 32
  const[f, setF] = useState(gradosFar)

  const cambiarGrados = (evento, valor) => {
    //2. Completar la logica para actualizar el estado de centigrados y farenheit y convertir el valor en grados centigrados a grados farenheit
    setC(valor)
    console.log(c)
    
    setF((valor * 9/5) + 32)
    console.log(`grados far${f}`)
    
  };

  return (
    <div className="App">
      <div className="temperature">
        <h1>Convertir °C a °F</h1>
        <h5>{f}°F</h5>
        {
          //3. Definir los props faltantes para el componente Slider
        }
        <Slider
          defaultValue={0}
          getAriaValueText={()=>valuetext(f)}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
          onChange={cambiarGrados}
        />
      </div>
    </div>
  );
}
