import PropTypes from "prop-types";

const Pelicula = ({ peliculas = [] }) => {
  return (
    <>
      {peliculas.length > 0 && (
        <div className="grid-container">
          {peliculas.map((pelicula) => (
            <div key={pelicula.id} className="card">
              <h1>{pelicula.original_title}</h1>
              <img 
                src={`https://image.tmdb.org/t/p/w200${pelicula.poster_path || ""}`} 
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

Pelicula.PropTypes = {
    peliculas: PropTypes.array.isRequired, // se hace esto porque se espera un array
};

export default Pelicula;
