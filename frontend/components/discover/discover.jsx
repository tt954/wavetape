import React from 'react';

import SideBar from '../sidebar/sidebar_container';

class Discover extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="discover-main">
        <div className="discover-main-music">
          {/* <Playlist /> */}
          {/* <Playlist /> */}
          {/* <Playlist /> */}

        </div>
        
        <SideBar />
      </div>
    )
  }
}

export default Discover;