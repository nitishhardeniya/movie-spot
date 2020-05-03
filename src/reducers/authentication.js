const reducer = (state={},action) => {
	switch(action.type){
		case 'GUEST_SESSION_CREATED' :
			return {...state, guestSession: action.data};
		default :
			return state;
	}
}

export default reducer;