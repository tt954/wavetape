import React from 'react';
import { Route } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_api_util';
import Splash from '../components/splash/splash_container';
import NavBar from '../components/nav_bar/nav_bar_container';
import Modal from './modal/modal';

const App = () => (
  <>
    <Modal />
    <header>
      <AuthRoute path="/" component={Splash} />
      <Route path="/discover" component={NavBar} />

    </header>

  </>
);

export default App;