import React from 'react';

import { GrShare, GrMail } from 'react-icons/gr';
import { FaPencilAlt, FaUserPlus } from 'react-icons/fa';
import { FiRadio } from 'react-icons/fi';
import { BsThreeDots } from 'react-icons/bs';
import NavBar from '../nav_bar/nav_bar_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    const { currentUser } = this.props;
    const user = this.props.user;
    // debugger;

    const upnButtons = (currentUser) ? (
      <>
        <button><span><GrShare /></span>Share</button>
        <button><span><FaPencilAlt /></span>Edit</button>
      </>
    ) : (
      <>
        <button><span><FiRadio /></span>Station</button>
        <button><span><FaUserPlus /></span>Follow</button>
        <button><span><GrShare /></span>Share</button>
        <button><span><GrMail /></span></button>
        <button><span><BsThreeDots /></span></button>
      </>
    )

    return (
      <>
      <NavBar />
      <div className="user-profile">
        <div className="user-profile-banner">
          <div className="upb-content">
            <div className="upb-avatar">
              <img src="" alt=""/>
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
          <div className="upn-buttons">
            {upnButtons}
          </div>
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