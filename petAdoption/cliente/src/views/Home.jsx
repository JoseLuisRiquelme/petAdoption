import React from "react";
import { useMascotas } from "../context/DataContext";

 const Home=()=>{
    const mascotas = useMascotas
    console.log(mascotas)
    
    return(<div>{mascotas.map((mascota=>(<div key={mascota.id}>{mascota.nombre}</div>)))}</div>)
    
 }

 export default Home;