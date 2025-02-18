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

export default Serie;
