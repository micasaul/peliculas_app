import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { movieGenres, movieDefecto, tvDefecto } from "../utils/api";
import "../styles/genre.css";

const SeriePeli = ({peli, serie }) => {

    const navigate = useNavigate();

    const [seriePelis, setSeriePelis] = useState([]);
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        const cargarContenido = async () => {
            const seriesData = await tvDefecto();
            const peliculasData = await movieDefecto();
            setSeriePelis(seriesData.results, peliculasData.results);

            const generosData = await movieGenres();
            setGeneros(generosData.genres);
        };
        cargarContenido();
    }, []);

    const shuffle = (array) => {
        const shuffled = [...array];
        let currentIndex = shuffled.length;
        for (let i = currentIndex - 1; i > 0; i--) {
            for (let j = i-1; j>0; j--){
                if (shuffled[i].popularity > shuffled[j].popularity){
                    let x = shuffled[i];
                    shuffled[i] = shuffled[j];
                    shuffled[j] = x;
                }
            }
        }
        return shuffled;
    }

    useEffect(() => {
        if (peli.length > 0 || serie.length > 0) {
            const combinado = [...peli, ...serie];
            setSeriePelis(shuffle(combinado));
        }
    }, [peli, serie]);

    return(
        <>
            {seriePelis.length > 0 && (
                <div className="grid-container">
                    <div className="title">
                        <select onChange={(e) => {
                            const id = e.target.value
                            navigate(`/pelicula-serie/genero/${id}`)
                        }}>
                            <option value="">Generos</option>
                            {generos.map((genero) => (
                                <option key={genero.id} value={genero.id}>{genero.original_title || genero.original_name}</option>
                            ))}
                        </select>
                    </div>
                    {seriePelis.map((seriepeli) => (
                        <button
                            key={seriepeli.id}
                            onClick={() => {
                                const title = seriepeli.original_title || seriepeli.original_name;
                                const route = seriepeli.original_title ? `/pelicula/${title}` : `/serie/${title}`;
                                navigate(route);
                            }}
                            className="button-card"
                        >
                            <div key={seriepeli.id} className="card">
                                <h1>{seriepeli.original_title || seriepeli.original_name}</h1>
                                <img 
                                    src={`https://image.tmdb.org/t/p/w500${seriepeli.poster_path || ""}`}
                                    alt={seriepeli.original_title || seriepeli.original_name}
                                />
                                <p>{seriepeli.overview}</p>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </>
    )
};

SeriePeli.propTypes = {
    peli: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            original_title: PropTypes.string.isRequired,
            poster_path: PropTypes.string,
            overview: PropTypes.string.isRequired,
        })
    ).isRequired,
    serie: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            original_name: PropTypes.string.isRequired,
            poster_path: PropTypes.string,
            overview: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default SeriePeli;