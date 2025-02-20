import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByName, getByTitle, peliculasDefecto, seriesDefecto } from "../utils/api";
import SeriePeli from "./SeriePeli";
import "../styles/home.css";

const Home = ({busqueda, setBusqueda}) => {

  const {busqueda : busquedaParam} = useParams();

  const [peliculas, setPeliculas] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const cargarContenido = async () => {
      if (busquedaParam) {
        const peliculasData = await getByTitle(busquedaParam);
        const seriesData = await getByName(busquedaParam);
        setPeliculas(peliculasData.results);
        setSeries(seriesData.results);
      } else{
        const peliculasData = await peliculasDefecto();
        const seriesData = await seriesDefecto();
        setPeliculas(peliculasData.results);
        setSeries(seriesData.results);
      };
    };
    cargarContenido();
  }, [busquedaParam]);
  
  return (
    <div>
      <div>
        <SeriePeli peli={peliculas} serie={series}/>
      </div>
    </div>
  )
};

Home.propTypes = {
  setPeliculas: PropTypes.func.isRequired,
  setSeries: PropTypes.func.isRequired,
  peliculas: PropTypes.array.isRequired,
  series: PropTypes.array.isRequired
}

export default Home;