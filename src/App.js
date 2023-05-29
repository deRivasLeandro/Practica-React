import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  //Primer hook
  const [servicios, agregarServicios] = useState(
    [
      {id:1, nombre:"Consulta", precio:2500},
      {id:2, nombre:"Royal Canin 1kg", precio:2000},
      {id:3, nombre:"Vacunación", precio:3000}
    ]
  );

  return (
    <div className="App">
      <Header/>
      <h1>Veterinaria UNAHUR</h1>
      {
        servicios.map( servicio => (
          <p>{servicio.nombre} = ${servicio.precio}</p>
        ))
      }
      <Footer
        redSocial = {"@UNAHUR"}
      />
    </div>
  );
}

export default App;
