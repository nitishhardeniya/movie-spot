import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/layout/header';
import BottomBar from './components/layout/bottombar';
import Showcase from './pages/showcase';
import Category from './pages/category';
import Info from './pages/info';
import TVInfo from './pages/tvinfo';
import { withTheme } from 'styled-components';

//Router
import {Switch,Route} from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

//Redux configs
import {Provider} from 'react-redux';
import store from './store';

//Default actions
import { getMyWishlist } from './actions/wishlist';
import { createGuestSession } from './actions/authentication';
import Wishlist from './components/wishlist';
import MoreNav from './components/more';

const movieStore = store;

movieStore.subscribe(()=>{
  // console.log("Redux state tree: ",movieStore.getState());  
});

movieStore.dispatch(getMyWishlist());
movieStore.dispatch(createGuestSession());

const Nav = () => {
  return (<Switch>
        <Route path='/' component={Showcase} exact/>
        <Route path='/category/:type/:category' component={Category} />
        <Route path='/movie/:movieId' component={Info} />
        <Route path='/tv/:tvId' component={TVInfo} />
        <Route path='/wishlist' component={Wishlist} />
        <Route path='/more-nav' component={MoreNav} />
      </Switch>)
}

function App() {
  const [screenWidth, updateWindowDimensions] = useState(window.screen.width);

  useEffect(() => {
    window.addEventListener("resize", (event) => {
      updateWindowDimensions(window.screen.width);
    });
  }, []);
  const isMobile = screenWidth <= 480;

  return (
    <Provider store={movieStore} >
      <HashRouter basename={process.env.PUBLIC_URL}>
        {!isMobile ? <Header /> : <BottomBar />}
        <section className="section">
          <Nav />
        </section>
      </HashRouter>
    </Provider>
  );
}

export default withTheme(App);


/*TODOS:
  - D Refactoring of actions
  - Toaster notifications
  - D Wishlist to be connected to store
  - D SASS for styles
  - Skeleton loader component
  - D Similar movies - on info page
  - D load more movies on scroll - category page
  - D Search a movie by name
  - Filter movies by year, rating
  - D Add a feature to add to wishlist a movie - LocalStorage
  - D Show all wishlisted movies in drawer with scheduled time to watch
  - Add a basic login mechanism to validate user
  - Group a collection of movies and share with friends
*/