import React from 'react';

import { FaUserFriends, FaLinkedin, FaGithub, FaAngellist } from 'react-icons/fa'
import NavBar from '../nav_bar/nav_bar_container';
import Playlist from '../tracks/playlist_container';

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    const { currentUser, users, tracks } = this.props;
    let playlist1, playlist2, playlist3;

    if (!Object.keys(tracks).length) {
      return (
        <button onClick={this.props.fetchTracks}>Loading...</button>
      )
    } else {
      playlist1 = tracks.slice(8); playlist2 = tracks.slice(0, 4); playlist3 = tracks.slice(4, 8);

    }

    return (
      <>
        <NavBar />
        <div className="discover-main">
          <div className="discover-main-content">
            <ul className="dmc-content">
              <li><Playlist 
                plTitle="New Music Now"
                plTagline="The latest hits, updated at all time"
                tracks={playlist1}/> 
              </li>
              <li><Playlist 
                plTitle="Trending"
                plTagline="The most played tracks on WaveTape this week"
                tracks={playlist3}/>
              </li>
              <li><Playlist 
                plTitle="Bubbling Up"
                plTagline="Emerging new music and tomorrow's stars"
                tracks={playlist2}/>
              </li>
            </ul>

          </div>
          
          <div className="discover-main-sidebar">
            <div className="dms-openFridge">
              <a href="https://open--fridge.herokuapp.com/" target="_blank">
                <div className="dms-of-text">
                  <img className="hey-hey" src="https://va.sndcdn.com/db/fff903a22d5c7466ce86e0690f420e23e75f7f88.png" alt="hey-hey"/>
                  <div className="dms-of-tagline">
                    <p>Check out</p>
                    <p>my other project</p>
                    <p><span>openFridge</span> | No ingredients left behind. Make something new today.</p>
                  </div>
                </div>
              </a>
              <div className="of-demo-pic"></div>
            </div>

            <div className="dms-whotofollow followingsModule">
              <span><FaUserFriends />Who to follow</span>
              <ul className="profile-followings">
                {/* {followingLis} */}
              </ul>
            </div>

            <div className="dms-goMobile">
              <p>Go mobile</p>
              <div className="sdi-links">
                <span className="app-store not-allowed"></span>
                <span className="google-play not-allowed"></span>
              </div>
            </div>

            <div className="dms-social personal-links">
              <a id="personal-site" href="https://tt954.github.io/" target="_blank">TT.</a>
              <a href="https://www.linkedin.com/in/tieulam-thai-01bb3112b/" target="_blank"><FaLinkedin /></a>
              <a href="https://angel.co/u/tieulam-thai" target="_blank"><FaAngellist /></a>
              <a href="https://github.com/tt954" target="_blank"><FaGithub /></a>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Discover;