import React from 'react';

import Playlist from '../tracks/playlist_container';
import SideBar from '../sidebar/sidebar_container';

class Discover extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="discover-main">
        <div className="discover-main-content">
          <ul className="dmc-content">
            <li><Playlist 
              plTitle="New Music Now"
              plTagline="The latest hits, updated at all time"/> </li>
            <li><Playlist 
              playlistTitle="Trending"
              plTagline="The most played tracks on WaveTape this week"/> </li>
          </ul>

        </div>
        
        <div className="discover-main-sidebar">
          <SideBar />
        </div>
      </div>
    )
  }
}

export default Discover;