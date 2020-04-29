export const getTvSeriesByCategory = (category) => ({
	type : 'GET_TV_SERIES_BY_CAT',
	query : category
});

export const getTvSeriesInfo = (movieId) => ({
    type: 'GET_TV_SERIES_INFO',
    query: movieId
});

export const getSimililarTvSeries = (movieId) => ({
	type : 'GET_SIMILAR_TV',
	query : movieId
})