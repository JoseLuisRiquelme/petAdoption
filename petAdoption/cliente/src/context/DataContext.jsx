import React, { createContext, useEffect, useState, useContext } from "react";
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const url = './mascotas.json'
    const [mascotas, setMascotas] = useState([
    ]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
            const response = await axios.get(url);
            setMascotas(response.data);
            console.log(mascotas)
        } catch (error) {
            console.error('Error al obtener las mascotas:', error);
            setError('Hubo un error al cargar las mascotas. Por favor, inténtalo de nuevo.');
            console.log(error)
        } finally {
            setLoading(false);
        }
    };

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
