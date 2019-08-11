import { combineReducers } from 'redux'

import moviesReducer from './movie';
import filtersReducer from './filters';


export default combineReducers({
	movies:moviesReducer,
	filters:filtersReducer
})