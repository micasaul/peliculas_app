export const getPelicula = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos,images`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_TOKEN_API}`
        }
    });
    const data = await response.json();
    return data;
}