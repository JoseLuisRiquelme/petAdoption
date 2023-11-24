import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMascotas } from "../context/DataContext";

const Home = () => {
  const mascotas = useMascotas(); 
  console.log(mascotas);

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="..." className="card-img-top" alt="Descripción" />
      <div className="card-body">
        <h5 className="card-title">Titulo</h5>
        <p className="card-text">Texto de ejemplo para construir el contenido de la tarjeta.</p>
        <a href="#" className="btn btn-primary">Ir a algún lugar</a>
      </div>
    </div>
  );
}

export default Home;