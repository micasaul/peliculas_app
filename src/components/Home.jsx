import { useEffect, useState } from "react";
import { peliculasDefecto, getByTitle, seriesDefecto, getByName } from "../utils/api";
import Header from "./Header";
import SeriePeli from "./SeriePeli";
import "../styles/home.css";

const Home = () => {

  const [busqueda, setBusqueda] = useState("");
  const [peliculas, setPeliculas] = useState([]);
  const [series, setSeries] = useState([ ]);

  useEffect(() => {
    const cargarContenido = async () => {
      const peliculasData = await peliculasDefecto();
      const seriesData = await seriesDefecto();
      setPeliculas(peliculasData.results);
      setSeries(seriesData.results);
    };
    cargarContenido();
  }, []);

  const obtenerPorTitulo = async () => {  
    if (busqueda.trim() === "") {
      const peliculasData = await peliculasDefecto();
      const seriesData = await seriesDefecto();
      setPeliculas(peliculasData.results);
      setSeries(seriesData.results);
    } else {
      const peliculasData = await getByTitle(busqueda);
      const seriesData = await getByName(busqueda);
      setPeliculas(peliculasData.results);
      setSeries(seriesData.results);
    }
  };


  return (
    <div>
      <Header busqueda={busqueda} setBusqueda={setBusqueda} obtenerPorTitulo={obtenerPorTitulo} />
      <SeriePeli peli={peliculas} serie={series}/>
    </div>
  )
};

export default Home;
