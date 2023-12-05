import  { createContext, useEffect, useState, useContext } from "react";
import axios from 'axios';


export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const url = './mascotas.json'
    const [mascotas, setMascotas] = useState([
    ]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData =async () => {
        try {
          const response = await fetch('./mascotas.json');
  
          if (!response.ok) {
            throw new Error('No se pudieron obtener los datos');
          }
  
          const data = await response.json();
          setMascotas(data);
        } catch (error) {
          console.error('Error al obtener datos:', error.message);
        }
      }
    useEffect(() => {
        getData();
    }, []);

    return (
        <DataContext.Provider value={{ mascotas, loading, error }}>
            {children}
        </DataContext.Provider>
    );
};

export const useMascotas = () => {
    return useContext(DataContext);
};
