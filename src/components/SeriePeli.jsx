import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const SeriePeli = ({peli, serie }) => {

    const [seriepelis, setSeriePelis] = useState([]);

    const shuffle = (array) => {
        const shuffled = [...array];
        let currentIndex = shuffled.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [shuffled[currentIndex], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[currentIndex]];
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
            {seriepelis.length > 0 && (
                <div className="grid-container">
                    {seriepelis.map((seriepeli) => (
                        <div key={seriepeli.id} className="card">
                            <h1>{seriepeli.original_title}</h1>
                            <img 
                                src={`https://image.tmdb.org/t/p/w500${seriepeli.poster_path || ""}`} 
                                alt={seriepeli.original_title} 
                            />
                            <p>{seriepeli.overview}</p>
                        </div>
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