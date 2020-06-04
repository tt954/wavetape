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
          <Playlist /> 
          <Playlist /> 
          <Playlist />

        </div>
        
        <SideBar />
      </div>
    )
  }
}

export default Discover;