import {useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import popcorn from "../assets/popcorn.png";
import "../styles/header.css";

const Header = ({busqueda, setBusqueda, obtenerPorTitulo}) => {
    
    const navigate = useNavigate();

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            obtenerPorTitulo();
        }
    }

    return (
        <header>
            <button className='logo_button' onClick={() => window.location.reload()}>
                <div className="logo">
                    <img src={popcorn} alt="popcorn" /> 
                    <h1>Movies and Series</h1>
                </div>
            </button>
            <div className="menu">
                <button
                    onClick={() => 
                        navigate("/serie")
                    }
                >  
                    Series
                </button>
                <button
                    onClick={() => 
                        navigate("/pelicula")
                    }
                >
                    Peliculas
                </button>
            </div>
            <div className="busqueda">
                <input 
                    type="text"
                    placeholder="Buscar por título"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={obtenerPorTitulo}>Buscar</button>
            </div>
        </header>
    );
};
Header.propTypes = {
    busqueda: PropTypes.string.isRequired,
    setBusqueda: PropTypes.func.isRequired,
    obtenerPorTitulo: PropTypes.func.isRequired,
};

export default Header;