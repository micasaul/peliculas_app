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
  }, []);

  

  return (
    <div>
      <div>
        <SeriePeli peli={peliculas} serie={series}/>
      </div>
    </div>
  )
};

export default Home;