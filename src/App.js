import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Showcase from './pages/showcase';
import Mostpopular from './pages/mostpopular';
import Toprated from './pages/toprated';

//Router
import {Switch,Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

//Redux configs
import {Provider} from 'react-redux';
//import store from './store';

//const movieStore = store();

import moviesReducer from './reducers/movie';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { createStore, applyMiddleware } from 'redux';

const sagaMiddleware = createSagaMiddleware();

const movieStore = createStore(
   moviesReducer,
   applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);



const Nav = () => {
  return (<BrowserRouter>
      <Switch>
        <Route path='/' component={Showcase} exact/>
        <Route path='/popular' component={Mostpopular} />
        <Route path='/toprated' component={Toprated} />
      </Switch>
    </BrowserRouter>)
}

function App() {
  return (
    <Provider store={movieStore} >
      <Nav />
    </Provider>
  );
}

export default App;
