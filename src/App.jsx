import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Serie from './components/Serie'
import Pelicula from './components/Pelicula'
import SerieDetalle from './components/SerieDetalle'
import PeliculaDetalle from './components/PeliculaDetalle'
import SerieGeneros from './components/SerieGeneros'
import PeliculaGeneros from './components/PeliculaGeneros'
import SeriePeliGeneros from './components/SeriePeliGeneros'
import './App.css'

function App() {

  const [busqueda, setBusqueda] = useState("");

  return (
    <Router>
      <div>
        <Header busqueda={busqueda} setBusqueda={setBusqueda}/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/search/:busqueda' element={<Home />} />
        <Route path='/serie' element={<Serie />}/>
        <Route path='/pelicula' element={<Pelicula />}/>
        <Route path='/serie-genero/:id' element={<SerieGeneros />} />
        <Route path='/pelicula-genero/:id' element={<PeliculaGeneros />} />
        <Route path='/pelicula-serie-genero/:id' element={<SeriePeliGeneros />} />
        <Route path="/serie/:original_name" element={<SerieDetalle />} />
        <Route path="/pelicula/:original_title" element={<PeliculaDetalle />} />
      </Routes>
    </Router>
  )
}

export default App