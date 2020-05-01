const reducer = (state={},action) => {
	switch(action.type){
		// case 'GET_MOVIES_BY_CAT':
		// 	return {...state,loading:true};
		// case 'GET_MOVIE_INFO':
		// 	return {...state,loading:true};
		// case 'GET_SEARCH' :
		// 	return {...state,loading:true};
		case 'TV_SERIES_BY_CAT_RECEIVED':
			let newObj = {};
			newObj[action.query.category] = [];
			newObj[action.query.category] = state[action.query.category] ? [...state[action.query.category],...action.data] :  action.data;	
			return {...state,...newObj};
		// case 'RESULTS_RECIEVED' :
		// 	return {...state,results:action.data,loading:false};
		case 'TV_SERIES_INFO_RECIEVED' :
			return {...state,info:action.data,loading:false};
		case 'SIMILAR_TV_SERIES_RECIEVED' :
			return {...state,similar:action.data,loading:false};
		default :
			return state;
	}
}

export default reducer;