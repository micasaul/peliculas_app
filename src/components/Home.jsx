import { useState } from "react";
import { getByTitle } from "../utils/api";
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
      {peliculas.length > 0 && (
        <div className="grid-container">
          {peliculas.map((pelicula) => (
            <div key={pelicula.id} className="card">
              <h1>{pelicula.original_title}</h1>
              <img src={`https://image.tmdb.org/t/p/w200${pelicula.poster_path}`} alt={pelicula.original_title} />
              <p>{pelicula.overview}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;