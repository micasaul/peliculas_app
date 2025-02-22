import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieByGenre, getTvByGenre, movieGenres, tvGenres } from "../utils/api";
import "../styles/genre.css";

const SeriePeliGeneros = () =>{

    const {id : genre} = useParams();
    const navigate = useNavigate();

    const [generos, setGeneros] = useState([]);
    const [seriePelis, setSeriePelis] = useState([]);

    useEffect(() => {
        const cargarContenido = async () => {
            const peliculasData = await getMovieByGenre(genre);
            const seriesData = await getTvByGenre(genre);
            setSeriePelis([...peliculasData.results, ...seriesData.results]);

            const generosPeliData = await movieGenres();
            const generosSerieData = await tvGenres();
            const generosTodos = [...generosPeliData.genres, ...generosSerieData.genres];

            const generosUnicos = [
              ...new Set(generosTodos.map((genero) => genero.id)),
            ].map((id) => generosTodos.find((genero) => genero.id === id));

            setGeneros(generosUnicos);
        };
        cargarContenido();
    }, [genre]);
    
    const selectedGenre = generos.find((g) => g.id === parseInt(genre));

    return(
        <>
            {seriePelis.length > 0 && (
                <div>
                    <div className="title">
                        <h1>{selectedGenre?.name}</h1>
                        <select onChange={(e) => {
                            const id = e.target.value
                            navigate(`/pelicula-serie/genero/${id}`)
                            }}
                        >
                            <option value="">Generos</option>
                            {generos.map((genero) => (
                                <option key={genero.id} value={genero.id}>{genero.name}</option>
                            )
                        )}
                        </select>
                    </div>
                    <div className="grid-container">
                        {seriePelis.map((seriePeli) => (
                            <button
                                key={seriePeli.id}
                                onClick={() => {
                                    const title = seriePeli.original_title || seriePeli.original_name;
                                    const route = seriePeli.original_title ? `/pelicula/${title}` : `/serie/${title}`;
                                    navigate(route);
                                }}
                                className="button-card"
                            >
                                <div key={seriePeli.id} className="card">
                                    <h1>{seriePeli.original_title || seriePeli.original_name}</h1>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${seriePeli.poster_path || ""}`}
                                        alt={seriePeli.original_title || seriePeli.original_name} 
                                    />
                                    <p>{seriePeli.overview ? seriePeli.overview : "Lo sentimos. No hay información disponible"}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
};

export default SeriePeliGeneros;