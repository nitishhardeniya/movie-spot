import { createStore, applyMiddleware, compose } from 'redux';
import moviesReducer from './reducers/movie';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const movieStore = createStore(
   moviesReducer,
   composeEnhancers(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

export default movieStore;