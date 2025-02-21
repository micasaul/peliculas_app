import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Serie from './components/Serie'
import Pelicula from './components/Pelicula'
import SerieDetalle from './components/SerieDetalle'
import PeliculaDetalle from './components/PeliculaDetalle'
import './App.css'

function App() {

  const [busqueda, setBusqueda] = useState("");

  return (
    <Router>
      <div>
        <Header busqueda={busqueda} setBusqueda={setBusqueda}/>
      </div>
      <Routes>
        <Route path="/" element={<Home busqueda={busqueda} setBusqueda={setBusqueda} />} />
        <Route path='busqueda/:busqueda' element={<Home busqueda={busqueda} setBusqueda={setBusqueda} />} />
        <Route path='/serie' element={<Serie />}/>
        <Route path='/pelicula' element={<Pelicula />}/>
        <Route path="/serie/:original_name" element={<SerieDetalle />} />
        <Route path="/pelicula/:original_title" element={<PeliculaDetalle />} />
      </Routes>
    </Router>
  )
}

export default App