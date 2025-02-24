import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTvByName, getTvVideo, tvGenres } from "../utils/api";
import "../styles/details.css"

const SerieDetalle = () => {
    const { original_name } = useParams();
    const [serie, setSerie] = useState({});
    const [generos, setGeneros] = useState([]);
    const [video, setVideo] = useState({});
    
    useEffect(() => {
        const cargarSerie = async () => {
            const decodedName = decodeURIComponent(original_name);
            const serieData = await getTvByName(decodedName);
            setSerie(serieData.results[0]);

            const generosData = await tvGenres();
            setGeneros(generosData.genres);

            const videoData = await getTvVideo(serieData.results[0].id);
            setVideo(videoData.results[0]);
        };
        cargarSerie();
    }, [original_name]);
    
    return (
        <div className="cuerpo">
            <div className="sinopsis">
                <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path || ""}`} alt={serie.original_name} />
                <div className="info">    
                    <h1>{serie.original_name}</h1>
                    <p>{serie.overview ? serie.overview : "Lo sentimos. No hay información disponible."}</p>
                    <p id="genero">Generos: {serie.genre_ids?.map((g) => {
                        const genre = generos.find((gen) => gen.id === g);
                        return genre?.name
                    }).join(", ")}</p>
                </div>
            </div>
            {video?.key && (
                <iframe
                    className="video"
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${video.key}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
};

export default SerieDetalle;