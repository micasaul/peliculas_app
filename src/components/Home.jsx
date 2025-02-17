import { useState } from "react";
import { getPelicula } from "../utils/api"

const Home = () => {
    const [id, setId] = useState("");
    const [pelicula, setPelicula] = useState({});

    const obtenerPelicula = async () => {
        const data = await getPelicula(id);
        setPelicula(data);
    }

    return (
        <div>
            <input
                type="number"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <button onClick={obtenerPelicula}>Obtener Película</button>

            {pelicula ? (
        <div>
          <h2>{pelicula.original_title}</h2>
          <p>{pelicula.overview}</p>
        </div>
      ) : (
        <p>No se ha seleccionado una película o está cargando...</p>
      )}
    </div>
    );
}

export default Home