export const getPelicula = async (id) => {
    const url = 'https://api.themoviedb.org/3/movie/11?append_to_response=videos,images';
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_TOKEN_API}`
        }
    });
    const data = await response.json();
    return data;
} 

export const getFilmByName = async (name) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${name}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {"Authorization": `Bearer ${import.meta.env.VITE_TOKEN_API}`
        }
    });
    const data = await response.json();
    return data;
}

export const getShowByName = async (name) => {
    const url = `https://api.themoviedb.org/3/search/tv?query=${name}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {"Authorization": `Bearer ${import.meta.env.VITE_TOKEN_API}`
        }
    });
    const data = await response.json();
    return data;
}