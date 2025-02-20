import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getByTitle } from "../utils/api";
import "../styles/details.css"

const PeliculaDetalle = () => {
    const { original_title } = useParams();
    const [pelicula, setPelicula] = useState({});
    
    useEffect(() => {
        const cargarPelicula = async () => {
            const peliculaData = await getByTitle(original_title);
            setPelicula(peliculaData.results[0]);
        };
        cargarPelicula();
    }, [original_title]);
    
    return (
        <div className="cuerpo">
            <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path || ""}`} alt={pelicula.original_title} />
            <div className="info">
                <h1>{pelicula.original_title}</h1>
                <p>{pelicula.overview ? pelicula.overview : "Lo sentimos. No hay información disponible"}</p>
            </div>
        </div>
    );
};

export default PeliculaDetalle;