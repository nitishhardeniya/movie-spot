export const getMoviesByCategory = (category) => ({
	type : 'GET_MOVIES_BY_CAT',
	query : category
});

export const getMovieInfo = (movieId) => ({
    type: 'GET_MOVIE_INFO',
    query: movieId
});

export const getSimililar = (movieId) => ({
	type : 'GET_SIMILAR_MOVIES',
	query : movieId
});

export const rateMovie = (payload) => ({
	type: "RATE_MOVIE",
	payload 
});