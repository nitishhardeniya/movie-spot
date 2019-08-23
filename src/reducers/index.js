import { combineReducers } from 'redux'

import moviesReducer from './movie';
import filtersReducer from './filters';
import wishlistReducer from './wishlist';


export default combineReducers({
	movies:moviesReducer,
	filters:filtersReducer,
	wishlist : wishlistReducer
})