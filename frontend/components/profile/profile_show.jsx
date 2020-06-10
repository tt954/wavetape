import React from 'react';
import { Link } from 'react-router-dom';

import { GrShare, GrMail } from 'react-icons/gr';
import { FaPencilAlt, FaUserPlus } from 'react-icons/fa';
import { FiRadio } from 'react-icons/fi';
import { BsThreeDots } from 'react-icons/bs';
import NavBar from '../nav_bar/nav_bar_container';
import Playlist from '../tracks/playlist_container';

class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { currentUser, users, openModal } = this.props;
    const user = this.props.user;
    let followingsModule;

    if (Object.keys(users).length === 1) {
      return (
        <button onClick={this.props.fetchUsers}>Fetch Users</button>
      )
    } else {
      followingsModule = user.followee_ids.map(followee_id => {
        return (
          <li key={followee_id}>
            <Link to={`/users/${followee_id}`}>{users[followee_id].username}</Link>
          </li>
        )}
      )
    };

    const upnButtons = (currentUser.id === user.id) ? (
      <>
        <button className="not-allowed"><span><GrShare /></span>Share</button>
        <button onClick={() => openModal('profileEdit')}><span><FaPencilAlt /></span>Edit</button>
      </>
    ) : (
      <>
        <button><span><FiRadio /></span>Station</button>
        <button><span><FaUserPlus /></span>Follow</button>
        <button><span><GrShare /></span>Share</button>
        <button><span><GrMail /></span></button>
        <button><span><BsThreeDots /></span></button>
      </>
    );

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
            <div className="upm-main">
              {/* <Playlist />
              <Playlist />
              <Playlist /> */}
            </div>
            <div className="upm-sidebar">
              <article className="sidebar-info-stats">
                <table className="info-stats-table">
                  <tbody>
                    <tr>
                      <td>
                        <h3>Followers</h3>
                        <div>{user.follower_ids.length}</div>
                      </td>
                      <td>
                        <h3>Following</h3>
                        <div>{user.followee_ids.length}</div>
                      </td>
                      <td>
                        <h3>Tracks</h3>
                        <div>0</div> {/* number of user uploaded tracks */}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </article>
              <article className="sidebar-followModule followingsModule">
                {followingsModule}
              </article>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ProfileShow;
