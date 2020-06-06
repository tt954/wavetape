import React from 'react';

import NavBar from '../nav_bar/nav_bar_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const user = this.props.user;

    return (
      <>
      <NavBar />
      <div className="user-profile">
        <div className="user-profile-banner">
          <div className="upb-content">
            <div className="upb-avatar">
              <img src="" alt="user-profile-pic"/>
            </div>
            <div className="upb-info">
              <p>{user.username}</p>
            </div>
          </div>
        </div>
        
        <div className="user-profile-nav">
          <div className="upn-tabs">
            <ul className="upn-tabs-list">
              <li>All</li>
              <li>Popular tracks</li>
              <li>Tracks</li>
              <li>Albums</li>
              <li>Playlists</li>
              <li>Reposts</li>
            </ul>
          </div>
          <div className="upn-buttons"></div>
        </div>
        
        <div className="user-profile-main">
          <div className="upm-main"></div>
          <div className="upm-sidebar"></div>
        </div>
      </div>
      </>
    )
  }
}

export default Profile;