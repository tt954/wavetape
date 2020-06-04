import React from 'react';
import { Link } from 'react-router-dom';

import Playlist from '../tracks/playlist_container';

class Splash extends React.Component {
 render() {
   const { openModal } = this.props;
   return (
     <div className="splash-main">
      <section className="splash-top">
        <div className="splash-top-session">
          <button className="session-btn signin" onClick={() => openModal('login')}>Sign in</button>
          <button className="session-btn signup" onClick={() => openModal('signup')}>Create account</button>
          <a className="not-allowed" href="">For Creators</a>
        </div>    
      </section>


      <section className="splash-music">
        <Playlist />
        <Playlist />
      </section>

      <section className="splash-devices">
        <img className="devices-mockup" src="assets/devices-mockup.jpg" alt="devices-mockup"/>
      </section>

      <section className="splash-creative">
        <div className="splash-creative-content">
          <p className="test">Calling all creators</p>
          <p>Get on SoundCloud to connect with fans, share your sounds, and grow your audience. What are you waiting for?</p>
        </div>
      </section>

      <section className="splash-bottom">
      </section>
     </div>
   )
 }
}

export default Splash;

// 830px height