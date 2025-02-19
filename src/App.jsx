import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import PeliculaDetalle from './components/PeliculaDetalle'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pelicula/:original_title" element={<PeliculaDetalle />} />
      </Routes>
    </Router>
  )
}

export default App