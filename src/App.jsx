import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { peliculasDefecto, seriesDefecto, getByTitle, getByName } from './utils/api'
import Home from './components/Home'
import Header from './components/Header'
import Serie from './components/Serie'
import Pelicula from './components/Pelicula'
import SerieDetalle from './components/SerieDetalle'
import PeliculaDetalle from './components/PeliculaDetalle'
import './App.css'

function App() {

  const [busqueda, setBusqueda] = useState("");
  const [peliculas, setPeliculas] = useState([]);
  const [series, setSeries] = useState([]);

  const obtenerPorTitulo = async () => {  
    if (busqueda.trim() === "") {
      const peliculasData = await peliculasDefecto();
      const seriesData = await seriesDefecto();
      setPeliculas(peliculasData.results);
      setSeries(seriesData.results);
    } else {
      const peliculasData = await getByTitle(busqueda);
      const seriesData = await getByName(busqueda);
      setPeliculas(peliculasData.results);
      setSeries(seriesData.results);
    }
  };

  return (
    <Router>
      <div>
        <Header busqueda={busqueda} setBusqueda={setBusqueda} obtenerPorTitulo={obtenerPorTitulo}/>
      </div>
      <Routes>
        <Route path="/" element={<Home setPeliculas={setPeliculas} setSeries={setSeries} peliculas={peliculas} series={series} />} />
        <Route path='/serie' element={<Serie />}/>
        <Route path='/pelicula' element={<Pelicula />}/>
        <Route path="/serie/:original_name" element={<SerieDetalle />} />
        <Route path="/pelicula/:original_title" element={<PeliculaDetalle />} />
      </Routes>
    </Router>
  )
}

export default App