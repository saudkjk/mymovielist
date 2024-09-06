'use server';
const TMDB_API_KEY = process.env.API_KEY;
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export async function fetchMovies(endpoint: string = "/trending/movie/week?", page: Number = 1) {

    if (endpoint === "upcoming") {
        const today = new Date().toISOString().split('T')[0];
        endpoint = `/discover/movie?primary_release_date.gte=${today}&`;
    }

    const request = `${TMDB_BASE_URL}${endpoint}api_key=${TMDB_API_KEY}&with_original_language=en&language=en-US&page=${page}`
    // Get movies
    const res = await fetch(request);

    const data = await res.json();

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return data.results;
}

export async function fetchMovieById(movieId: string) {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=${process.env.API_LANG}&append_to_response=videos,credits,images,external_ids,release_dates&include_image_language=en`
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch movie with ID ${movieId}`);
        }

        const movieData = await response.json();

        return movieData;
    } catch (error) {
        console.error(`Error fetching movie ID ${movieId}:`, error);
        throw error;
    }
}


export async function fetchMoviesWithExtraDetails(endpoint = "/trending/movie/week?", page = 1) {
    try {
        const trendingMovies = await fetchMovies(endpoint, page);
        const detailedMovies = await Promise.all(
            trendingMovies.map(async (movie: any) => {
                const movieDetails = await fetchMovieById(movie.id);
                return {
                    ...movie,
                    extraDetails: movieDetails,
                };
            })
        );
        return detailedMovies;
    } catch (error) {
        console.error('Error fetching movies with extra details:', error);
        throw error;
    }
}