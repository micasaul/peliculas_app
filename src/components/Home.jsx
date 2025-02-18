import { useEffect, useState } from "react";
import { getByTitle } from "../utils/api";
import { getShowByName } from '../utils/api'
import { peliculasDefecto } from "../utils/api";
import { seriesDefecto } from "../utils/api";
import Pelicula from "./Pelicula";
import Serie from "./Serie";
import "../styles/home.css";

const Home = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const [series, setSeries] = useState([ ]);
  const [serie_name, setSerie_name] = useState("");

  useEffect(() => {
    const cargarPeliculas = async () => {
      const data = await peliculasDefecto();
      setMovies(data.results);
    };
    cargarPeliculas();
  }, []);

  const obtenerPorTitulo = async () => {  
    if (busqueda.trim() === "") {
      const data = await peliculasDefecto();
      setPeliculas(data.results);
    } else {
      const data = await getByTitle(busqueda);
      setPeliculas(data.results);
    }
  };

  const getSerieByName = async () => {
    if (serie_name.trim()=== "") {
      const data = await seriesDefecto(); 
      setSeries(data.results);
    } else{
      const data = await getShowByName(serie_name);
      setSeries(data.results);
    }
  }

  return (
    <div>
      <input 
        type="text"
        placeholder="Buscar pelicula por título"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <button onClick={obtenerPorTitulo}>Buscar</button>

      <input
        type="text"
        placeholder="Buscar serie por titulo"
        value={serie_name}
        onChange={(e) => setSerie_name(e.target.value)}
      />
      <button onClick={getSerieByName}>Buscar</button>
     
      <Pelicula peliculas={peliculas} />
      <Serie series={series} />
    </div>
  )
};
export default Home;