import PropTypes from 'prop-types';
import popcorn from "../assets/popcorn.png";
import "../styles/header.css";

const Header = ({busqueda, setBusqueda, obtenerPorTitulo}) => {
    
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            obtenerPorTitulo();
        }
    }

    return (
        <header>
            <div className="logo">
                <img src={popcorn} alt="popcorn" /> 
                <h1>Movies and Series</h1>
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