import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieByTitle, getMovieVideo, movieGenres } from "../utils/api";
import "../styles/details.css"

const PeliculaDetalle = () => {
    const { original_title } = useParams();
    const [pelicula, setPelicula] = useState({});
    const [generos, setGeneros] = useState([]);
    const [video, setVideo] = useState({});
    
    useEffect(() => {
        const cargarPelicula = async () => {
            const peliculaData = await getMovieByTitle(original_title);
            setPelicula(peliculaData.results[0]);

            const generosData = await movieGenres();
            setGeneros(generosData.genres);

            const videoData = await getMovieVideo(peliculaData.results[0].id);
            setVideo(videoData.results[0]);
        };
        cargarPelicula();
    }, [original_title]);
    
    return (
      <div className="cuerpo">
        <div className="sinopsis">
          <img
            src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path || ""}`}
            alt={pelicula.original_title}
          />
          <div className="info">
            <h1>{pelicula.original_title}</h1>
            <p>
              {pelicula.overview
                ? pelicula.overview
                : "Lo sentimos. No hay información disponible"}
            </p>
            <p id="genero">
              Generos:{" "}
              {pelicula.genre_ids
                ?.map((g) => {
                  const genre = generos.find((gen) => gen.id === g);
                  return genre?.name;
                })
                .join(", ")}
            </p>
          </div>
        </div>
        <div className="frame">
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
      </div>
    );
};

export default PeliculaDetalle;