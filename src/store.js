import { createStore, applyMiddleware, compose } from 'redux';
import moviesReducer from './reducers/movie';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	return createStore(
			moviesReducer,
			composeEnhancers(applyMiddleware(sagaMiddleware))
		);
		//console.log(rootSaga)
		sagaMiddleware.run(rootSaga);
}