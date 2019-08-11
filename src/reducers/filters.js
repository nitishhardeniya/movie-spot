const filtersReducer = (state={},action) => {
	switch(action.type){
		case 'GET_SEARCH' :
			return {...state,query:action.query,loading:true};
		default :
			return state;
	}
}

export default filtersReducer;