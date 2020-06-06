import React from 'react';
import { Route } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_api_util';
import Modal from './modal/modal';
import Splash from '../components/splash/splash_container';
import NavBar from '../components/nav_bar/nav_bar_container';
import Discover from '../components/discover/discover_container';
import Profile from '../components/profile/profile_container';

const App = () => (
  <>
    <Modal />
    <AuthRoute exact path="/" component={Splash} />
    <Route path="/discover" render={props =>
      <><NavBar />
        <Discover /></>
    } />

    <ProtectedRoute
      exact path="/users/:userId"
      component={Profile}/>

  </>
);

export default App;