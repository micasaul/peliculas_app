export const getTvByName = async (name) => {
    const url = `https://api.themoviedb.org/3/search/tv?query=${name}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {"Authorization": `Bearer ${import.meta.env.VITE_TOKEN_API}`
        }
    });
    const data = await response.json();
    return data;
}

export const getMovieByTitle = async (title) => {
        const url = `https://api.themoviedb.org/3/search/movie?query=${title}`;
        const response = await fetch(url, {
                method: 'GET',
                headers: {
                        "Authorization": `Bearer ${import.meta.env.VITE_TOKEN_API}`
                }
        });
        const data = await response.json();
        return data;
}

export const getTvVideo = async (id) => {
        const url = `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`
        const response = await fetch (url, {
                method: 'GET',
                headers: {
                        "Authorization": `Bearer ${import.meta.env.VITE_TOKEN_API}`
                }
        })
        const data = await response.json();
        return data
}

export const getMovieVideo = async (id) => {
        const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
        const response = await fetch (url, {
                method: 'GET',
                headers: {
                        "Authorization": `Bearer ${import.meta.env.VITE_TOKEN_API}`
                }
        })
        const data = await response.json();
        return data
}

export const tvDefecto = async () => {
        const url = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
        const response = await fetch(url, {
                method: 'GET',
                headers: {
                        "Authorization": `Bearer ${import.meta.env.VITE_TOKEN_API}`
                }
        });
        const data = await response.json();
        return data; 
}

export const movieDefecto = async () => {
        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
        const response = await fetch(url, {
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${import.meta.env.VITE_TOKEN_API}`
                }
        });
        const data = await response.json();
        return data;
}

export const tvGenres = async () => {
        const url = 'https://api.themoviedb.org/3/genre/tv/list?language=en';
        const response = await fetch(url, {
                method: 'GET',
                headers: {
                        "Authorization": `Bearer ${import.meta.env.VITE_TOKEN_API}`
                }
        });
        const data = await response.json();
        return data;
}

export const movieGenres = async () => {
        const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
        const response = await fetch(url, {
                method: 'GET',
                headers: {
                        "Authorization": `Bearer ${import.meta.env.VITE_TOKEN_API}`
                }
        });
        const data = await response.json();
        return data;
}

export const getTvByGenre = async (genre) => {
        const url = `https://api.themoviedb.org/3/discover/tv?with_genres=${genre}&sort_by=popularity.desc`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${import.meta.env.VITE_TOKEN_API}`
            }
        });
        const data = await response.json();
        return data;
}

export const getMovieByGenre = async (genre) => {
        const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&sort_by=popularity.desc`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${import.meta.env.VITE_TOKEN_API}`
            }
        });
        const data = await response.json();
        return data;
}