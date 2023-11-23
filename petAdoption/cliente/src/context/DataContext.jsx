import React, { createContext, useEffect, useState, useContext } from "react";
import axios from 'axios'
export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [mascotas, setMascotas] = useState([]);
    


    const getData = async () => {
        try {
          const response = await axios.get('./mascotas.json');
          setMascotas(response.data);
        } catch (error) {
          console.error('Error al obtener las mascotas:', error);
        }
      };
      console.log(mascotas)

    useEffect(() => {
        getData()
    }, [])
    return (
        <DataContext.Provider value={{
            mascotas
        }}>
            {children}
        </DataContext.Provider>
    )
}

export const useMascotas = () =>{
    return useContext(DataContext)
}
