import {put, takeLatest, takeEvery, all} from 'redux-saga/effects';
import { BASE_URL, SEARCH, API_KEY } from './../constants/config';
import CONFIG from './../constants/config';
import LS from './../helpers/localDB';

function* fetchMoviesByCategory(action){
	const popular =	yield fetch(BASE_URL+CONFIG[action.query.category]+'api_key='+API_KEY+'&page='+action.query.page).then((data)=>data.json()).catch(err => console.log(err));
	yield put({type:'MOVIES_BY_CAT_RECEIVED',query:action.query,data:popular.results});
}

function* fetchTvSeriesByCategory(action){
	const res =	yield fetch(BASE_URL+CONFIG[action.query.category]+'api_key='+API_KEY+'&page='+action.query.page).then((data)=>data.json()).catch(err => console.log(err));
	yield put({type:'TV_SERIES_BY_CAT_RECEIVED',query:action.query,data:res.results});
}

function* fetchSearchRes(action){
	const searchText = action.query;
	const search = yield fetch(BASE_URL+SEARCH+'api_key='+API_KEY+'&query='+searchText).then((data)=>data.json()).catch(err => console.log(err));
	yield put({type:'RESULTS_RECIEVED',data:search.results});
}

function* fetchMovieInfo(action){
	const movieId = action.query;
	const search = yield fetch(BASE_URL+'/movie/'+movieId+'?api_key='+API_KEY).then((data)=>data.json()).catch(err => console.log(err));
	yield put({type:'INFO_RECIEVED',data:search});
}

function* fetchSimilarMovies(action){
	const movieId = action.query;
	const similar = yield fetch(BASE_URL+'/movie/'+movieId+'/similar?api_key='+API_KEY).then((data)=>data.json()).catch(err => console.log(err));
	yield put({type:'SIMILAR_MOVIES_RECIEVED',data:similar.results});
}

function* fetchTvSeriesInfo(action){
	const tvId = action.query;
	const search = yield fetch(BASE_URL+'/tv/'+tvId+'?api_key='+API_KEY).then((data)=>data.json()).catch(err => console.log(err));
	yield put({type:'TV_SERIES_INFO_RECIEVED',data:search});
}

function* fetchSimilarTvSeries(action){
	const tvId = action.query;
	const similar = yield fetch(BASE_URL+'/tv/'+tvId+'/similar?api_key='+API_KEY).then((data)=>data.json()).catch(err => console.log(err));
	yield put({type:'SIMILAR_TV_SERIES_RECIEVED',data:similar.results});
}

function* fetchWishlist(){
	let currentWL = LS.getData("wishlist");
	yield put({type:'WISHLIST_ITEMS',data:currentWL});
}

function* addItemToWishlist(action){
	const movie = action.query;
	let wishlistItem = {
		id: movie.id,
		name: movie.title || movie.name,
		poster_path : movie.poster_path
	}
	let currentWL = LS.getData("wishlist");
	if(currentWL){
		currentWL[wishlistItem.id] = wishlistItem;
	}else{
		currentWL = {};
		currentWL[wishlistItem.id] = wishlistItem;
	}

	LS.setData("wishlist",currentWL);
	yield put({type:'WISHLIST_ITEMS',data:currentWL});
}

function* removeFromWishlist(action){
	const movie = action.query;
	let currentWL = LS.getData("wishlist");
	if(currentWL && currentWL[movie.id]){
		delete currentWL[movie.id];
		LS.setData("wishlist",currentWL);
		yield put({type:'WISHLIST_ITEMS',data:currentWL,reset:true});
	}
}

function* clearWishlist(){
	let currentWL = LS.getData("wishlist");
	if(currentWL && Object.keys(currentWL).length > 0){
		currentWL = {};
		LS.setData("wishlist",currentWL);
		yield put({type:'WISHLIST_ITEMS',data:currentWL,reset:true});
	}
}

function* actionWatcher(){
	yield takeEvery('GET_MOVIES_BY_CAT',fetchMoviesByCategory);
	yield takeLatest('GET_SEARCH',fetchSearchRes);
	yield takeLatest('GET_MOVIE_INFO',fetchMovieInfo);
	yield takeLatest('GET_SIMILAR_MOVIES',fetchSimilarMovies);
	yield takeLatest('GET_TV_SERIES_INFO',fetchTvSeriesInfo);
	yield takeLatest('GET_SIMILAR_TV_SERIES',fetchSimilarTvSeries);
	yield takeLatest('GET_WISHLIST', fetchWishlist);
	yield takeLatest('ADD_ITEM_WISHLIST', addItemToWishlist);
	yield takeLatest('REMOVE_ITEM_WISHLIST', removeFromWishlist);
	yield takeLatest('CLEAR_WISHLIST', clearWishlist);
	yield takeEvery('GET_TV_SERIES_BY_CAT', fetchTvSeriesByCategory)
}

export default function* rootSaga(){
	yield all([
		actionWatcher()
	]);
}