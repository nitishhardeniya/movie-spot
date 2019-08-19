const reducer = (state={},action) => {
	switch(action.type){
		case 'GET_MOVIES_BY_CAT':
			return {...state,loading:true};
		case 'GET_MOVIE_INFO':
			return {...state,loading:true};
		case 'GET_SEARCH' :
			return {...state,loading:true};
		case 'MOVIES_BY_CAT_RECEIVED':
			let newObj = {};
			newObj[action.query] = action.data;
			return {...state,...newObj,loading:false};
		case 'RESULTS_RECIEVED' :
			return {...state,results:action.data,loading:false};
		case 'INFO_RECIEVED' :
			return {...state,info:action.data,loading:false};
		default :
			return state;
	}
}

export default reducer;