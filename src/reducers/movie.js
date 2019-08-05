const reducer = (state={},action) => {
	switch(action.type){
		case 'GET_POPULAR':
			return {...state,loading:true};
		case 'GET_TOPRATED':
			return {...state,loading:true};
		case 'POPULAR_RECEIVED':
			return {...state,popular:action.data,loading:false}
		case 'TOPRATED_RECEIVED':
			return {...state,toprated:action.data,loading:false}
		default :
			return state;
	}
}

export default reducer;