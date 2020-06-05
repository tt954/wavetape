import React from 'react';

import Playlist from '../tracks/playlist_container';

class Splash extends React.Component {
 render() {
   const { openModal } = this.props;
   return (
     <div className="splash-main">
      <section className="splash-top">
        <div className="splash-top-nav">
          <div className="splash-top-nav-left">
            <img className="stnl-logo" src="assets/wt-icon.png" alt="wavetape-logo" />
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
        <div className="splash-music-search">
          <div className="sms-container">
            <form className="sms-searchbar-form">
              <input className="sms-searchbar"
                type="search"
                placeholder="Search for artist, bands, tracks, tapes" /> 
              <button type="button" className="sms-searchbar-button">Search</button>
            </form>
             <span>or</span>
            <a className="sms-upload">Upload your own</a>
          </div>
        </div>
        <div className="splash-music-trending">
          Music coming soon
        </div>
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
          <p className="scc-title">Calling all creators</p>
          <p className="scc-tagline">Get on WaveTape to set sail, share your sounds, and ride the waves. Darling, what are you waiting for?</p>
          <div><a className="scc-button not-allowed">Find out more</a></div>
        </div>
      </section>

      <section className="splash-bottom">
        <div className="splash-botttom-session">
          <p className="sbs-title">Thanks for listening. Now join in.</p>
          <p className="sbs-tagline">Save tracks, follow artists and build playlists. All for free.</p>
          <p><button className="button-large sbs-signup" onClick={() => openModal('signup')}>Create Account</button></p>
          <p className="sbs-alternative font-light">Already have an account?
            <button className="button-large sbs-signin" onClick={() => openModal('login')}>Sign in</button>
          </p>
        </div>
      </section>
     
      <section className="splash-footer">
        <div className="splash-footer-links not-allowed">
          <a>Popular searches</a>&nbsp;⁃
          <a> Directory</a>&nbsp;⁃
          <a> About us</a>&nbsp;⁃
          <a> Creator Resources</a>&nbsp;⁃
          <a> Blogs</a>&nbsp;⁃
          <a> Jobs</a>&nbsp;⁃
          <a> Developers</a>&nbsp;⁃
          <a> Help</a>&nbsp;⁃
          <a> Legal</a>&nbsp;⁃
          <a> Privacy</a>&nbsp;⁃
          <a> Cookies</a>&nbsp;⁃
          <a> Imprints</a>&nbsp;⁃
          <a> Charts</a>
        </div>
        <div className="splash-footer-lang not-allowed">
           <p><a className="sfl-link">Language: </a>English (US)</p>
        </div>
      </section>
     </div>
   )
 }
}

export default Splash;
