import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_api_util';

import Modal from './modal/modal';
import Splash from '../components/splash/splash_container';
import Discover from '../components/discover/discover_container';
import ProfileShow from './profile/profile_show_container';
import TrackShow from './tracks/track_show_container';
import TrackUpload from './tracks/upload/track_upload_container';
import MusicPlayer from './tracks/music_player/music_player_container';

const App = () => (
  <>
    <Modal />

    <AuthRoute exact path="/" component={Splash} />
    <Route path="/discover" component={Discover} />

    <ProtectedRoute
      exact path="/users/:userId"
      component={ProfileShow}/>

    <Route 
      exact path="/tracks/:trackId"
      component={TrackShow}/>

    <Route
      exact path="/upload"
      component={TrackUpload} />

    <MusicPlayer />
  </>
);

export default App;