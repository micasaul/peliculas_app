export const getPelicula = async (id) => {
    const url = 'https://api.themoviedb.org/3/movie/11';
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${process.env.TOKEN_API}`
        }
    });
    const data = await response.json();
    return data;
} 