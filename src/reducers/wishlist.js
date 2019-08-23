const wishlistReducer = (state={},action) => {
	switch(action.type){
		case 'WISHLIST_ITEMS' :
			return {...state,...action.data};
		default :
			return state;
	}
}

export default wishlistReducer;