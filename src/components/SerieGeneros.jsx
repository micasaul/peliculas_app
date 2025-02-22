import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { tvGenres, getTvByGenre } from "../utils/api";
import "../styles/genre.css";

const SerieGeneros = () =>{

    const {id : genre} = useParams();
    const navigate = useNavigate();

    const [generos, setGeneros] = useState([]);
    const [series, setSeries] = useState([]);

    useEffect(() => {
        const cargarContenido = async () => {
          const seriesData = await getTvByGenre(genre);
          setSeries(seriesData.results);

          const generosData = await tvGenres();
          setGeneros(generosData.genres);
        };
        cargarContenido();
    }, [genre]);

    const selectedGenre = generos.find((g) => g.id === parseInt(genre));

    return(
        <>
            {series.length > 0 && (
                <div>
                    <div className="title">
                        <h1>{selectedGenre?.name}</h1>
                        <select
                            onChange={(e) => {
                                const id = e.target.value
                                navigate(`/serie-genero/${id}`)
                            }}
                        >    
                            <option value="">Generos</option>
                            {generos.map((genero) => (
                                <option key={genero.id} value={genero.id}>{genero.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="grid-container">
                        {series.map((serie) => (
                            <button
                                key={serie.id}
                                onClick={() => {
                                    const title = serie.original_name
                                    const route = `/serie/${title}`;
                                    navigate(route);
                                }}
                                className="button-card"
                            >
                                <div key={serie.id} className="card">
                                    <h1>{serie.original_name}</h1>
                                    <img 
                                        src={`https://image.tmdb.org/t/p/w500${serie.poster_path || ""}`}
                                        alt={serie.original_name} 
                                    />
                                    <p>{serie.overview ? serie.overview : "Lo sentimos. No hay información disponible"}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default SerieGeneros;