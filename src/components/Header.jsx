import {useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from "../assets/logo_text.png";
import "../styles/header.css";

const Header = ({busqueda, setBusqueda}) => {
    
    const navigate = useNavigate();

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            navigate(`/search/${busqueda}`);
        }
    }

    return (
        <header>
            <button className='logo_button' onClick={() => navigate("/")}>
                <div className="logo">
                    <img src={logo} alt="logo" /> 
                </div>
            </button>
            <div className="menu">
                <button
                    onClick={() => 
                        navigate("/pelicula")
                    }
                >
                    Peliculas
                </button>
                <button
                    onClick={() => 
                        navigate("/serie")
                    }
                >  
                    Series
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
                <button onClick={() => {navigate(`/search/${busqueda}`); }}>Buscar</button>
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