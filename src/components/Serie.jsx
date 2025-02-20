import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { seriesDefecto } from "../utils/api";

const Serie = () =>{

    const navigate = useNavigate();

    const [series, setSeries] = useState([]);

    useEffect(() => {
        const cargarContenido = async () => {
          const seriesData = await seriesDefecto();
          setSeries(seriesData.results);
        };
        cargarContenido();
    }, []);

    return(
        <>
            {series.length > 0 && (
                <div className="grid-container">
                    {series.map((series) => (
                        <button
                            key={series.id}
                            onClick={() => {
                                const title = series.original_name
                                const route = `/serie/${title}`;
                                navigate(route);
                            }}
                            className="button-card"
                        >
                            <div key={series.id} className="card">
                                <h1>{series.original_name}</h1>
                                <img 
                                    src={`https://image.tmdb.org/t/p/w500${series.poster_path || ""}`}
                                    alt={series.original_name} 
                                />
                                <p>{series.overview}</p>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </>
    )
}

export default Serie;