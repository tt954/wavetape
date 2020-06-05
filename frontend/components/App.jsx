import React from 'react';
import { Route } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_api_util';
import Splash from '../components/splash/splash_container';
import NavBar from '../components/nav_bar/nav_bar_container';
import Discover from '../components/discover/discover_container';
import Modal from './modal/modal';

const App = () => (
  <>
    <Modal />
    <AuthRoute exact path="/" component={Splash} />
    <Route path="/discover" render={props =>
      <>
        <header className="banner">
          <NavBar />
        </header>
        <Discover />
      </>
    } />

  </>
);

export default App;