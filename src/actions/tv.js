export const getTvSeriesByCategory = (category) => ({
	type : 'GET_TV_SERIES_BY_CAT',
	query : category
});

export const getTvSeriesInfo = (tvId) => ({
    type: 'GET_TV_SERIES_INFO',
    query: tvId
});

export const getSimililarTvSeries = (tvId) => ({
	type : 'GET_SIMILAR_TV_SERIES',
	query : tvId
});

export const rateTV = (payload) => ({
	type: "RATE_TV",
	payload 
});