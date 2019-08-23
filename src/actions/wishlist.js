export const addToWishlist = (movie) => ({
      type: 'ADD_ITEM_WISHLIST',
      query: movie
});

export const getMyWishlist = () => ({
	type : 'GET_WISHLIST'
});