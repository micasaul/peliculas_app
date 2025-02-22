import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieByGenre, movieGenres } from "../utils/api";
import "../styles/genre.css";

const PeliculaGeneros = () =>{

    const {id : genre} = useParams();
    const navigate = useNavigate();

    const [generos, setGeneros] = useState([]);
    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        const cargarContenido = async () => {
          const peliculasData = await getMovieByGenre(genre);
          setPeliculas(peliculasData.results);

          const generosData = await movieGenres();
          setGeneros(generosData.genres);
        };
        cargarContenido();
    }, [genre]);

    const selectedGenre = generos.find((g) => g.id === parseInt(genre));

    return(
        <>
            {peliculas.length > 0 && (
                <div>
                    <div className="title">
                        <h1>{selectedGenre?.name}</h1>
                        <select onChange={(e) => {
                                const id = e.target.value
                                navigate(`/pelicula/genero/${id}`)
                            }}
                        >
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

export default PeliculaGeneros;