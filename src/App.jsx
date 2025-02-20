import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import SerieDetalle from './components/SerieDetalle'
import PeliculaDetalle from './components/PeliculaDetalle'
import './App.css'

function App() {

  return (
    <Router>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/serie/:original_name" element={<SerieDetalle />} />
        <Route path="/pelicula/:original_title" element={<PeliculaDetalle />} />
      </Routes>
    </Router>
  )
}

export default App