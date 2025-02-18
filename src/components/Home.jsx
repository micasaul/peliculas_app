import { useEffect, useState } from "react";
import { peliculasDefecto, getByTitle, seriesDefecto, getByName } from "../utils/api";
import Pelicula from "./Pelicula";
import Serie from "./Serie";
import "../styles/home.css";

const Home = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const [series, setSeries] = useState([ ]);

  useEffect(() => {
    const cargarContenido = async () => {
      const peliculasData = await peliculasDefecto();
      const seriesData = await seriesDefecto();
      setPeliculas(peliculasData.results);
      setSeries(seriesData.results);
    };
    cargarContenido();
  }, []);

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
    <div>
      <input 
        type="text"
        placeholder="Buscar por título"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <button onClick={obtenerPorTitulo}>Buscar</button>
      
      <Pelicula peliculas={peliculas} />
      <Serie series={series} />
    </div>
  )
};
export default Home;