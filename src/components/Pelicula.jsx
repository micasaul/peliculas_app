const Pelicula = ({ peliculas = [] }) => {
  return (
    <>
      {peliculas.length > 0 && (
        <div className="grid-container">
          {peliculas.map((pelicula) => (
            <div key={pelicula.id} className="card">
              <h1>{pelicula.original_title}</h1>
              <img 
                src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path || ""}`} 
                alt={pelicula.original_title} 
              />
              <p>{pelicula.overview}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Pelicula;
