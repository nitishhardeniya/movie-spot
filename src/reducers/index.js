import { combineReducers } from 'redux'

import moviesReducer from './movie';
import tvReducer from './tv';
import filtersReducer from './filters';
import wishlistReducer from './wishlist';
import authenticationReducer from './authentication';


export default combineReducers({
	movies:moviesReducer,
	tv: tvReducer,
	filters:filtersReducer,
	wishlist : wishlistReducer,
	authentication : authenticationReducer,
})