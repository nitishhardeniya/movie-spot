import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/header';
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
      <Header />
      <Nav />
    </Provider>
  );
}

export default App;


/*TODOS:
  - Lazy load more movies on scroll
  - Search a movie by name
  - Filter movies by name, rating ,date
  - Add a feature to add to wishlist a movie - LocalStorage
  - Show all wishlisted movies in drawer with scheduled time to watch
  - Add a basic login mechanism to validate user
  - Group a collection of movies and share with friends
*/