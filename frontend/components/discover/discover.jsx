import React from 'react';

import NavBar from '../nav_bar/nav_bar_container';
import Playlist from '../tracks/playlist_container';
import SideBar from '../sidebar/sidebar_container';

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    const { tracks } = this.props;
    let playlist1, playlist2, playlist3;

    if (Object.keys(tracks).length === 0) {
      return (
        <button onClick={this.props.fetchTracks}>Loading...</button>
      )
    } else {
      playlist1 = tracks.slice(8);
      playlist2 = tracks.slice(0, 4);
      playlist3 = tracks.slice(4, 8);
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
            <SideBar />
          </div>
        </div>
      </>
    )
  }
}

export default Discover;