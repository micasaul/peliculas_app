import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { peliculasDefecto } from "../utils/api";
import "../styles/details.css"

const Pelicula = () =>{

    const navigate = useNavigate();

    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        const cargarContenido = async () => {
          const peliculasData = await peliculasDefecto();
          setPeliculas(peliculasData.results);
        };
        cargarContenido();
    }, []);

    return(
        <>
            {peliculas.length > 0 && (
                <div className="grid-container">
                    {peliculas.map((peliculas) => (
                        <button
                            key={peliculas.id}
                            onClick={() => {
                                const title = peliculas.original_title
                                const route = `/pelicula/${title}`;
                                navigate(route);
                            }}
                            className="button-card"
                        >
                            <div key={peliculas.id} className="card">
                                <h1>{peliculas.original_title}</h1>
                                <img 
                                    src={`https://image.tmdb.org/t/p/w500${peliculas.poster_path || ""}`}
                                    alt={peliculas.original_title} 
                                />
                                <p>{peliculas.overview ? peliculas.overview : "Lo sentimos. No hay información disponible"}</p>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </>
    )
}

export default Pelicula;