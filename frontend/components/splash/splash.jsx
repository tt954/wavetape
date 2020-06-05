import React from 'react';
import { Link } from 'react-router-dom';

import Playlist from '../tracks/playlist_container';

class Splash extends React.Component {
 render() {
   const { openModal } = this.props;
   return (
     <div className="splash-main">
      <section className="splash-top">
        <div className="splash-top-nav">
          <div className="splash-top-nav-left">
            <img src="" alt="wavetape-logo" />
          </div>
          <div className="spash-top-nav-right">
            <button className="session-btn signin" onClick={() => openModal('login')}>Sign in</button>
            <button className="session-btn signup" onClick={() => openModal('signup')}>Create account</button>
            <button className="not-allowed">For Creators</button>
          </div>
        </div>  

        <div className="splash-top-main">
          <p className="stm-title">What's next in music is first on WaveTape</p>
          <p className="stm-tagline">Upload your first track and begin your journey. WaveTape gives you space to create and connect with other artists.</p>
        </div>  
      </section>

      <section className="splash-music">
        Music coming soon
        {/* <Playlist />
        <Playlist /> */}
      </section>

      <section className="splash-devices">
        <div className="splash-devices-teaser">
        </div>
        <div className="splash-devices-info">
          <p className="sdi-header">Never Stop Listening</p>
          <p className="sdi-content">WaveTape is available on Web, iOS, Android, Stereo 8, Walkman, iPod Nano, and Nintendo Switch.</p>
          <div className="sdi-links">
            <a className="not-allowed app-store"></a>
            <a className="not-allowed google-play"></a>
          </div>
        </div>
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
