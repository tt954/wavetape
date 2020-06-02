import React from 'react';
import { Route } from 'react-router-dom';

// import { AuthRoute, ProtectedRoute } from '../util/route_api_util';
import NavBar from '../components/nav_bar/nav_bar_container';
import SignUpContainer from '../components/session/signup_form_container';
import SignInContainer from '../components/session/signin_form_container';

const App = () => (
  <>
    <header>
      <h1>WaveTape</h1>
      <NavBar />
      <Route exact path="/signup" component={SignUpContainer} />
      <Route exact path="/signin" component={SignInContainer} />
    </header>

  </>
);

export default App;