import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getByName } from "../utils/api";
import "../styles/details.css"

const SerieDetalle = () => {
    const { original_name } = useParams();
    const [serie, setSerie] = useState({});
    
    useEffect(() => {
        const cargarSerie = async () => {
            const decodedName = decodeURIComponent(original_name);
            const serieData = await getByName(decodedName);
            setSerie(serieData.results[0]);
        };
        cargarSerie();
    }, [original_name]);
    
    return (
        <div className="cuerpo">
            <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path || ""}`} alt={serie.original_name} />
            <div className="info">    
                <h1>{serie.original_name}</h1>
                <p>{serie.overview}</p>
            </div>
        </div>
    );
};

export default SerieDetalle;