
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Barra from './components/Barra';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Home from './views/Home';
import Perfil from './views/Perfil';
import Register from './views/Register';


function App() {
  

  return (  
    
    <>
      <BrowserRouter>
      <Barra></Barra>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Perfil' element={<Perfil/>}/>
          <Route path='/Registro' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
