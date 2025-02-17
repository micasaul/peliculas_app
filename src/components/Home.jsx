import { useState } from "react";
import { getByTitle } from "../utils/api";
import Pelicula from "./Pelicula";
import "../styles/home.css";

const Home = () => {
  const [peliculas, setPeliculas] = useState([]);

  const obtenerPorTitulo = async () => {
    const data = await getByTitle(peliculas.original_title);
    setPeliculas(data.results);
  }

  return (
    <div>
      <input type="text" onChange={(e) => setPeliculas({original_title: e.target.value})} />
      <button onClick={obtenerPorTitulo}>Buscar</button>
      <Pelicula peliculas={peliculas} />
    </div>
  );
}

export default Home;