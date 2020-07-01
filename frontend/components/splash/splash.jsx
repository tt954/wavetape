import React from 'react';
import { Link } from 'react-router-dom';

import PlaylistItem from '../tracks/playlist_item';
import { FaSearch, FaLinkedin, FaGithub, FaAngellist } from "react-icons/fa";

class Splash extends React.Component {
  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    const { openModal, tracks, receiveSelectedTrack } = this.props;
    let trackLis;

    if (!Object.keys(tracks).length) {
      return (
        <button onClick={this.props.fetchTracks}>Loading...</button>
      )
    } else {
      trackLis = tracks.map(track => 
        <li key={track.id}>
          <PlaylistItem 
            track={track}
            receiveSelectedTrack={receiveSelectedTrack} />
        </li>
      )
    }

    return (
      <div className="splash-main">
        <section className="splash-top">
          <div className="splash-top-nav">
            <div className="splash-top-nav-left">
              <img
                className="stnl-logo"
                src="assets/wt-icon.png"
                alt="wavetape-logo"
              />
            </div>
            <div className="spash-top-nav-right">
              <button
                className="session-btn signin"
                onClick={() => openModal("login")}
              >
                Sign in
              </button>
              <button
                className="session-btn signup"
                onClick={() => openModal("signup")}
              >
                Create account
              </button>
              <button className="not-allowed">For Creators</button>
            </div>
          </div>

          <div className="splash-top-main">
            <p className="stm-title">
              What's next in music is first on WaveTape
            </p>
            <p className="stm-tagline">
              Upload your first track and begin your journey. WaveTape gives you
              space to create and connect with other artists.
            </p>
          </div>
        </section>

        <section className="splash-music">
          <div className="splash-music-search">
            <div className="sms-container">
              <form className="sms-searchbar-form">
                <input
                  className="sms-searchbar"
                  type="search"
                  placeholder="Search function coming soon"
                />
                <button type="button" className="sms-searchbar-button">
                  <FaSearch />
                </button>
              </form>
              <span>or</span>
              <button
                className="sms-upload"
                onClick={() => openModal("signup")}
              >
                Upload your own
              </button>
            </div>
          </div>
          <div className="splash-music-trending">
            <div className="smt-title">
              Hear what’s trending for free in the WaveTape community
            </div>
            <div className="smt-playlist">
              <ul>{trackLis}</ul>
            </div>
            <div className="smt-btn-container">
              <button className="smt-explore-button">
                <Link to="/discover">Explore trending playlists</Link>
              </button>
            </div>
          </div>
        </section>

        <section className="splash-devices">
          <div className="splash-devices-teaser"></div>
          <div className="splash-devices-info">
            <p className="sdi-header">Never Stop Listening</p>
            <p className="sdi-content">
              WaveTape is only available on Web, sorry iOS, Android, Stereo 8,
              Walkman, iPod Nano, and Nintendo Switch.
            </p>
            <div className="sdi-links">
              <span className="app-store"></span>
              <span className="google-play"></span>
            </div>
          </div>
        </section>

        <section className="splash-creative">
          <div className="splash-creative-content">
            <p className="scc-title">Calling all creators</p>
            <p className="scc-tagline">
              Get on WaveTape to set sail, share your sounds, and ride the
              waves. Darling, what are you waiting for?
            </p>
            <div>
              <span className="scc-button">Find out more</span>
            </div>
          </div>
        </section>

        <section className="splash-bottom">
          <div className="splash-botttom-session">
            <p className="sbs-title">Thanks for listening. Now join in.</p>
            <p className="sbs-tagline">
              Save tracks, follow artists and build playlists. All for free.
            </p>
            <p>
              <button
                className="button-large sbs-signup"
                onClick={() => openModal("signup")}
              >
                Create Account
              </button>
            </p>
            <p className="sbs-alternative font-light">
              Already have an account?
              <button
                className="button-large sbs-signin"
                onClick={() => openModal("login")}
              >
                Sign in
              </button>
            </p>
          </div>
        </section>

        <section className="splash-footer">
          <div className="footer-links">
            <div className="personal-links">
              <a id="personal-site" href="https://tt954.github.io/" target="_blank">
                TT.
              </a>
              <a href="https://www.linkedin.com/in/tieulam-thai-01bb3112b/" target="_blank">
                <FaLinkedin />
              </a>
              <a href="https://angel.co/u/tieulam-thai" target="_blank">
                <FaAngellist />
              </a>
              <a href="https://github.com/tt954" target="_blank">
                <FaGithub />
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Splash;
