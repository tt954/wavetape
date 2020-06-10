import React from 'react';

import PlaylistIndex from '../tracks/playlist_index';
import { FaSearch } from 'react-icons/fa';

class Splash extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchTracks();
  }

  render() {
    const { openModal, users, tracks } = this.props;
    let trackLis;

    if (Object.keys(tracks).length === 0) {
      return (
        <button onClick={this.props.fetchTracks}>Loading...</button>
      )
    } else {
      trackLis = tracks.map(track => 
        <li key={track.id}>
          <PlaylistIndex 
            track={track}
            users={users} />
        </li>
      )
    }

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
                placeholder="Search function coming soon" /> 
              <button type="button" className="sms-searchbar-button"><FaSearch /></button>
            </form>
            <span>or</span>
            <button className="sms-upload" onClick={() => openModal('signup')}>Upload your own</button>
          </div>
        </div>
        <div className="splash-music-trending">
          <div className="smt-title">Hear what’s trending for free in the WaveTape community</div>
          <div className="smt-playlist">
            <ul>
              {trackLis}
            </ul>
          </div>
          <div className="smt-btn-container">
            <button className="smt-explore-button">Explore trending playlists</button>
          </div>
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
