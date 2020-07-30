import React from 'react';
import { Link } from 'react-router-dom';

import { GrMail } from 'react-icons/gr';
import { FaPencilAlt, FaUser, FaUserPlus, FaUserMinus, 
  FaUserFriends, FaPlayCircle, FaPauseCircle, FaShareSquare } from 'react-icons/fa';
import { GiSoundWaves } from 'react-icons/gi';
import { FiRadio } from 'react-icons/fi';
import { BsThreeDots } from 'react-icons/bs';

import NavBar from '../nav_bar/nav_bar_container';
import TrackItem from '../tracks/track_item';
import { generateBackground } from '../../util/misc_api_util';

class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      follow: "",
      followerPreview: false,
    }
    this.handleFollowing = this.handleFollowing.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchTracks();
  }

  handleFollowing(followId) {
    const { currentUser, createFollow, destroyFollow } = this.props;
    if (currentUser.followee_ids.includes(followId)) {
      destroyFollow(followId);
    } else {
      createFollow(followId);
    }
  }

  render() {
    const { openModal, currentUser, user, users, 
      tracks, selectedTrack, playing, togglePlay,
      receiveSelectedTrack } = this.props;
    let avatarImg, followingsModule, followersModule, 
      followingLis, followerLis,
      playButton, playAction;

    if (Object.keys(users).length === 1) {
      return (
        <button onClick={this.props.fetchUsers}>Loading...</button>
      )
    } else {
      avatarImg = <img src={user.avatarUrl} alt="" />
      followingLis = user.followee_ids.map(followee_id => {
        const followee = users[followee_id];
        return (
          <li className="followingItem" key={followee_id}>
            <Link to={`/users/${followee_id}`}>
              <img className="sb-followingAvatar" src={followee.avatarUrl} alt={followee.username}/>
              <div className="sb-followingDetail">
                <h3>{followee.username}</h3>
                <div className="sb-followingStats">
                  <p><FaUserFriends />{followee.follower_ids.length}</p>
                  <p><GiSoundWaves />{followee.track_ids.length}</p>
                </div>
              </div>
            </Link>
            <button 
              className={`followButton ${(currentUser.followee_ids.includes(followee.id)) ? "followed" : ""}`}
              onClick={() => this.handleFollowing(followee.id)}>
                {(currentUser.followee_ids.includes(followee.id)) ? <FaUserMinus /> : <FaUserPlus />}
                {(currentUser.followee_ids.includes(followee.id)) ? "Unfollow" : "Follow"}
            </button>
          </li>
        )}
      );
      followingsModule = (
        <div className="followingsModule">
          <span><FaUserFriends />{user.followee_ids.length} following</span>
          <ul className="profile-followings">
            {followingLis}
          </ul> 
        </div>
      )
      followerLis = user.follower_ids.map(follower_id => {
        const follower = users[follower_id];
        return (
          <li className="followerItem" key={follower_id}>
            <Link to={`/users/${follower_id}`} title={follower.username}>
              <img className="sb-followerAvatar" src={follower.avatarUrl} alt={follower.username} />
            </Link>
          </li>
        )
      })
      followersModule = (
        <div className="followersModule">
          <span><FaUser />{user.follower_ids.length} followers</span>
          <ul className="profile-followers">
            {followerLis}
          </ul>
        </div>
      )
    };

    if (selectedTrack) {
      playButton = playing ? <FaPauseCircle /> : <FaPlayCircle />;
      playAction = () => togglePlay();
    } else {
      playButton = <FaPlayCircle />;
      playAction = track => receiveSelectedTrack(track);
    }

    const upnButtons = (currentUser.id === user.id) ? (
      <>
        <button className="not-allowed"><FaShareSquare size={14}/>Share</button>
        <button onClick={() => openModal('profileEdit')}><FaPencilAlt size={12}/>Edit</button>
      </>
    ) : (
      <>
        <button><FiRadio />Station</button>
        <button 
          className={`profileFollowButton ${(currentUser.followee_ids.includes(user.id)) ? "followed" : ""}`}
          onClick={() => this.handleFollowing(user.id)}>
            {(currentUser.followee_ids.includes(user.id)) ? <FaUserMinus /> : <FaUserPlus />}
            {(currentUser.followee_ids.includes(user.id)) ? "Unfollow" : "Follow"}
        </button>
        <button><FaShareSquare size={14}/>Share</button>
        <button><GrMail size={16}/></button>
        <button><BsThreeDots /></button>
      </>
    );

    return (
      <>
        <NavBar />
        <div className="user-profile">
          <div className="user-profile-banner" style={generateBackground()}>
            <div className="upb-content">
              <div className="upb-avatar">
                {avatarImg}
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
              <h3>Recent</h3>
              <div className="upm-main-container">
                <ul className="userAllList">
                  {tracks.map(track => 
                    <TrackItem
                      track={track}
                      selectedTrack={selectedTrack}
                      playButton={playButton}
                      playAction={playAction}
                      currentUser={currentUser}
                      receiveSelectedTrack={receiveSelectedTrack} />
                  )}
                </ul>
              </div>
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
                        <div>{user.track_ids.length}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </article>
              <article className="sidebar-followModule">
                {followersModule}
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
