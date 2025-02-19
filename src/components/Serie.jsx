import PropTypes from 'prop-types';

const Serie = ({ series = [] }) => {
    return(
        <>
            {series.length > 0 && (
                <div className="grid-container">
                    {series.map((serie) => (
                        <div key={serie.id} className="card">
                            <h1>{serie.original_name}</h1>
                            <img 
                                src={`https://image.tmdb.org/t/p/w500${serie.poster_path || ""}`} 
                                alt={serie.original_name} 
                            />
                            <p>{serie.overview}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

Serie.propTypes = {
    series: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            original_name: PropTypes.string.isRequired,
            poster_path: PropTypes.string,
            overview: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Serie;
