import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { peliculasDefecto, filmGenres } from "../utils/api";
import "../styles/genre.css";

const Pelicula = () =>{

    const navigate = useNavigate();

    const [peliculas, setPeliculas] = useState([]);
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        const cargarContenido = async () => {
          const peliculasData = await peliculasDefecto();
          setPeliculas(peliculasData.results);

          const generosData = await filmGenres();
          setGeneros(generosData.genres);
        };
        cargarContenido();
    }, []);

    return(
        <>
            {peliculas.length > 0 && (
                <div>
                    <div className="title">
                        <select onChange={(e) => {
                            const id = e.target.value
                            navigate(`/pelicula/genero/${id}`)
                        }}>    
                            <option value="">Generos</option>
                            {generos.map((genero) => (
                                <option key={genero.id} value={genero.id}>{genero.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="grid-container">
                        {peliculas.map((pelicula) => (
                            <button
                                key={pelicula.id}
                                onClick={() => {
                                    const title = pelicula.original_title
                                    const route = `/pelicula/${title}`;
                                    navigate(route);
                                }}
                                className="button-card"
                            >
                                <div key={pelicula.id} className="card">
                                    <h1>{pelicula.original_title}</h1>
                                    <img 
                                        src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path || ""}`}
                                        alt={pelicula.original_title} 
                                    />
                                    <p>{pelicula.overview ? pelicula.overview : "Lo sentimos. No hay información disponible"}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Pelicula;