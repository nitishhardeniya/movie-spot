export const addToWishlist = (movie) => ({
      type: 'ADD_ITEM_WISHLIST',
      query: movie
});

export const getMyWishlist = () => ({
	type : 'GET_WISHLIST'
});

export const removeFromWishlist = (movie) => ({
      type: 'REMOVE_ITEM_WISHLIST',
      query: movie
});

export const clearWishlist = () => ({
	type : 'CLEAR_WISHLIST'
})