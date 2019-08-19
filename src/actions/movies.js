export const getMoviesByCategory = (category) => ({
	type : 'GET_MOVIES_BY_CAT',
	query : category
});

export const getMovieInfo = (movieId) => ({
      type: 'GET_MOVIE_INFO',
      query: movieId
});