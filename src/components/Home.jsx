import React from 'react'
import { getFilmByName } from '../utils/api'
import { getShowByName } from '../utils/api'

const Home = () => {
    const [movies, setMovies] = React.useState([ ]);
    const [loadingFilms, setLoadingFilms] = React.useState(false);
    const [errorFilms, setErrorFilms] = React.useState("");
    const [film_name, setFilm_name] = React.useState("");
    const [shows, setShows] = React.useState([ ]);
    const [loadingShows, setLoadingShows] = React.useState(false);
    const [errorShows, setErrorShows] = React.useState("");
    const [show_name, setShow_name] = React.useState("");


    const handleFilmClick = async () => {
        if (!film_name) {
            setErrorFilms("Debes ingresar un nombre de pelicula");
            return;
        }
        setLoadingFilms(true);
        try {
            const data = await getFilmByName(film_name);
            if (data.results && data.results.length >0){
                setMovies(data.results);
            } else{
                setErrorFilms("No se encontraron peliculas");
                setMovies([]);
            }
        } catch (error) {
            setErrorFilms("Hubo un error al obtener las peliculas");
            setMovies([]);
        }
        setLoadingFilms(false);
    };

    const handleShowClick = async () => {
        if (!show_name) {
            setErrorShows("Debes ingresar un nombre de la serie");
            return;
        }
        setLoadingShows(true);
        try {
            const data = await getShowByName(show_name);
            if (data.results && data.results.length >0){
                setShows(data.results);
            } else{
                setErrorShows("No se encontraron series");
                setShows([]);
            }
        } catch (error) {
            setErrorShows("Hubo un error al obtener las series");
            setShows([]);
        }
        setLoadingShows(false);
    };

    return (
        <div>
            <input 
                type="text" value={film_name} placeholder="Buscar pelicula" onChange={(e) => setFilm_name(e.target.value)}/>
            <button onClick={handleFilmClick}>Obtener peliculas</button>
            {loadingFilms && <p>Cargando...</p>}
            {errorFilms && <p>{errorFilms}</p>}
            <ul>
                {movies.length > 0 ? (
                    movies.map((movie) => (
                    <li key={movie.id} style={null}>
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        </li>
                ))
                ) : (
                    !loadingFilms && !errorFilms && <p>No hay peliculas</p>
                )}
            </ul>

            <input 
                type="text" value={show_name} placeholder="Buscar serie" onChange={(e) => setShow_name(e.target.value)}/>
            <button onClick={handleShowClick}>Obtener series</button>
            {loadingShows && <p>Cargando...</p>}
            {errorShows && <p>{errorShows}</p>}
            <ul>
                {shows.length > 0 ? (
                    shows.map((show) => (
                    <li key={show.id} style={null}>
                        <img src={`https://image.tmdb.org/t/p/w200${show.poster_path}`} alt={show.title} />
                        <h3>{show.title}</h3>
                        </li>
                ))
                ) : (
                    !loadingShows && !errorShows && <p>No hay series</p>
                )}
            </ul>
        </div>
    )
}

export default Home