import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
//import './bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import Banner from './components/Banner'
//import Wall from './views/Wall'
import Register from './views/Register'
//import { Wall } from './views/Wall'
//import { DataProvider } from './context/DataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Banner title="Crear Cuenta" subtitle="" />
    {/*<Banner title="Muro de la Fama" subtitle="" />*/}

    <Register />
    
    {/*
    <DataProvider>
      <App />
    </DataProvider>
    */}
  </React.StrictMode>,
)
