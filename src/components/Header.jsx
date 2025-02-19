import React from "react";
import popcorn from "../assets/popcorn.png";
import "../styles/header.css";

const Header = ({busqueda, setBusqueda, obtenerPorTitulo}) => {
    
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
                />
                <button onClick={obtenerPorTitulo}>Buscar</button>
            </div>
        </header>
    );
};

export default Header;