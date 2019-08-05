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
import store from './store';

const movieStore = store;

movieStore.subscribe(()=>{
  console.log("Redux state tree: ",movieStore.getState());  
});

const Nav = () => {
  return (<BrowserRouter>
      <Switch>
        <Route path='/' component={Showcase} exact/>
        <Route path='/popular' render={()=> <Mostpopular popular={movieStore.getState().popular} />} />
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
