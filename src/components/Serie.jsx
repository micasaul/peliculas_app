import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { seriesDefecto, tvGenres } from "../utils/api";
import "../styles/genre.css";

const Serie = () =>{

    const navigate = useNavigate();

    const [series, setSeries] = useState([]);
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        const cargarDatos = async () => {
          const seriesData = await seriesDefecto();
          setSeries(seriesData.results);

          const generosData = await tvGenres();
          setGeneros(generosData.genres);
        };
        cargarDatos();
    }, []);


    return(
        <>
            {series.length > 0 && (
                <div>
                    <div className="title">
                        <select 
                            onChange={(e)=>{
                                const id = e.target.value
                                navigate(`/serie/genero/${id}`)
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
                                    <p>{serie.overview ? serie.overview : "Lo sentimos. No hay información disponible."}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Serie;