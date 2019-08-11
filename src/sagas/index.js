import {put, takeLatest, all} from 'redux-saga/effects';
import { BASE_URL, POPULAR, TOP_RATED,SEARCH, API_KEY } from './../constants/config';

function* fetchPopular(){
	const popular =	yield fetch(BASE_URL+POPULAR+'api_key='+API_KEY).then((data)=>data.json());
	//console.log(popular);
	yield put({type:'POPULAR_RECEIVED',data:popular.results})
}

function* fetchToprated(){
	const toprated = yield fetch(BASE_URL+TOP_RATED+'api_key='+API_KEY).then((data)=>data.json());
	yield put({type:'TOPRATED_RECEIVED',data:toprated.results})
}

function* fetchSearchRes(action){
	const searchText = action.query;
	const search = yield fetch(BASE_URL+SEARCH+'api_key='+API_KEY+'&query='+searchText).then((data)=>data.json());
	yield put({type:'RESULTS_RECIEVED',data:search.results})
}

function* actionWatcher(){
	yield takeLatest('GET_POPULAR',fetchPopular)
	yield takeLatest('GET_TOPRATED',fetchToprated)
	yield takeLatest('GET_SEARCH',fetchSearchRes)
}

export default function* rootSaga(){
	yield all([
			actionWatcher()
		]);
}