import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Banner from './components/Banner.jsx'
import Register from './views/Register.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Banner />

    <Register />
  </React.StrictMode>,
)
