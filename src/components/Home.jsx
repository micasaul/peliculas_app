import { useEffect, useState } from "react";
import { getByTitle } from "../utils/api";
import { peliculasDefecto } from "../utils/api";
import Pelicula from "./Pelicula";
import "../styles/home.css";

const Home = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const cargarPeliculas = async () => {
      const data = await peliculasDefecto();
      setPeliculas(data.results);
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
    </div>
  );
}

export default Home;