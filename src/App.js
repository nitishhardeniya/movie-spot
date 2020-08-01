import React, { useState, useEffect } from 'react';
import { withTheme } from 'styled-components';
//import logo from './logo.svg';
import './styles.scss';
import Header from './components/layout/header';
import BottomBar from './components/layout/bottombar';
import Showcase from './pages/showcase';
import Category from './pages/category';
import Info from './pages/info';
import TVInfo from './pages/tvinfo';
import Wishlist from './pages/wishlist';
import Discover from './pages/discover'
import MoreNav from './pages/more';

//Router
import {Switch,Route} from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

//Redux configs
import {Provider} from 'react-redux';
import store from './store';

//Default actions
import { getMyWishlist } from './actions/wishlist';
import { createGuestSession } from './actions/authentication';

import DeviceContext from './context/device';

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
        <Route path='/discover' component={Discover} />
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
  const isMobile = screenWidth <= 800;

  return (
    <Provider store={movieStore} >
      <HashRouter basename={process.env.PUBLIC_URL}>
        <DeviceContext.Provider value={{ isMobile, screenWidth }}>
        {!isMobile ? <Header /> : <BottomBar />}
        <section className="section">
          <Nav />
        </section>
        </DeviceContext.Provider>
      </HashRouter>
    </Provider>
  );
}

export default withTheme(App);


/* ROADMAP :
  - D Refactoring of actions
  - Toaster notifications
  - D Wishlist to be connected to store
  - D SASS for styles
  - D Skeleton loader component
  - D Similar movies - on info page
  - D load more movies on scroll - category page
  - D Search a movie by name
  - Filter movies by year, rating
  - D Add a feature to add to wishlist a movie - LocalStorage
  - D Show all wishlisted movies in drawer with scheduled time to watch
  - Add a basic login mechanism to validate user
  - Group a collection of movies and share with friends
  - D Mobile view bottombar
  - Filter chips on top - movies, tv, all
  - Wishlist new look - Redesign
  - More menu items for mobile
  - Remove willReceiveProps from everywhere
*/