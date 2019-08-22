import {put, takeLatest, takeEvery, all} from 'redux-saga/effects';
import { BASE_URL, SEARCH, API_KEY } from './../constants/config';
import CONFIG from './../constants/config';

function* fetchMoviesByCategory(action){
	const popular =	yield fetch(BASE_URL+CONFIG[action.query]+'api_key='+API_KEY).then((data)=>data.json()).catch(err => console.log(err));
	yield put({type:'MOVIES_BY_CAT_RECEIVED',query:action.query,data:popular.results});
}

function* fetchSearchRes(action){
	const searchText = action.query;
	const search = yield fetch(BASE_URL+SEARCH+'api_key='+API_KEY+'&query='+searchText).then((data)=>data.json()).catch(err => console.log(err));
	yield put({type:'RESULTS_RECIEVED',data:search.results});
}

function* fetchMovieInfo(action){
	const movieId = action.query;
	const search = yield fetch(BASE_URL+'movie/'+movieId+'?api_key='+API_KEY).then((data)=>data.json()).catch(err => console.log(err));
	yield put({type:'INFO_RECIEVED',data:search});
}

function* actionWatcher(){
	yield takeEvery('GET_MOVIES_BY_CAT',fetchMoviesByCategory);
	yield takeLatest('GET_SEARCH',fetchSearchRes);
	yield takeLatest('GET_MOVIE_INFO',fetchMovieInfo);
}

export default function* rootSaga(){
	yield all([
		actionWatcher()
	]);
}