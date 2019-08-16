export const getPopular = () => ({
      type: 'GET_POPULAR',
});

export const getToprated = () => ({
      type: 'GET_TOPRATED',
});

export const getUpcoming = () => ({
      type: 'GET_UPCOMING',
});

export const getMovieInfo = (movieId) => ({
      type: 'GET_MOVIE_INFO',
      query: movieId
});