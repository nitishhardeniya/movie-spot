import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Showcase from './pages/showcase';
import Category from './pages/category';
import Info from './pages/info';

//Router
import {Switch,Route} from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

//Redux configs
import {Provider} from 'react-redux';
import store from './store';

const movieStore = store;

movieStore.subscribe(()=>{
  console.log("Redux state tree: ",movieStore.getState());  
});

const Nav = () => {
  return (<HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path='/' component={Showcase} exact/>
        <Route path='/category/:category' component={Category} />
        <Route path='/movie/:movieId' component={Info} />
      </Switch>
    </HashRouter>)
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
  - D Refactoring of actions
  - Toaster notifications
  - Wishlist to be connected to store
  - Lazy load more movies on scroll
  - D Search a movie by name
  - Filter movies by name, rating ,date
  - D Add a feature to add to wishlist a movie - LocalStorage
  - D Show all wishlisted movies in drawer with scheduled time to watch
  - Add a basic login mechanism to validate user
  - Group a collection of movies and share with friends
*/