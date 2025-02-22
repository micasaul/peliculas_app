import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTvByName, getMovieByTitle, movieDefecto, tvDefecto } from "../utils/api";
import SeriePeli from "./SeriePeli";
import "../styles/home.css";

const Home = () => {

  const {busqueda : busquedaParam} = useParams();

  const [peliculas, setPeliculas] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const cargarContenido = async () => {
      if (busquedaParam) {
        const peliculasData = await getMovieByTitle(busquedaParam);
        const seriesData = await getTvByName(busquedaParam);
        setPeliculas(peliculasData.results);
        setSeries(seriesData.results);
      } else{
        const peliculasData = await movieDefecto();
        const seriesData = await tvDefecto();
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

export default Home;