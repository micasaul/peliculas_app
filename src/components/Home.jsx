import PropTypes from "prop-types";
import { useEffect } from "react";
import { peliculasDefecto, seriesDefecto } from "../utils/api";
import SeriePeli from "./SeriePeli";
import "../styles/home.css";

const Home = ({setPeliculas, setSeries, peliculas, series}) => {

  useEffect(() => {
    const cargarContenido = async () => {
      const peliculasData = await peliculasDefecto();
      const seriesData = await seriesDefecto();
      setPeliculas(peliculasData.results);
      setSeries(seriesData.results);
    };
    cargarContenido();
  }, [setPeliculas, setSeries]);

  

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