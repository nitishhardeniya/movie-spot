const wishlistReducer = (state={},action) => {
	switch(action.type){
		case 'WISHLIST_ITEMS' :
			if(action.reset){
				return {...action.data};
			}
			return {...state,...action.data};
		default :
			return state;
	}
}

export default wishlistReducer;