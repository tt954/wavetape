import React from 'react';
import { Link } from 'react-router-dom';

import { GrShare, GrMail } from 'react-icons/gr';
import { FaPencilAlt, FaUserPlus, FaUserMinus, FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import { FiRadio } from 'react-icons/fi';
import { BsThreeDots } from 'react-icons/bs';

import NavBar from '../nav_bar/nav_bar_container';
import PlaylistItem from '../tracks/playlist_item';
import Playlist from '../tracks/playlist';
import { follow, unfollow } from "../../util/follow_api_util";

class ProfileShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "",
    }
    this.handleFollowing = this.handleFollowing.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchTracks();
  }

  handleFollowing() {
    const { user, currentUser, fetchUser } = this.props;
    if (currentUser.followee_ids.includes(user.id)) {
      unfollow(user.id);
    } else {
      follow(user.id);
    }
    fetchUser(user.id);
  }

  generateBackground() {
    const hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];

    function populate(a) {
      for (var i = 0; i < 6; i++) {
        var x = Math.round(Math.random() * 14);
        var y = hexValues[x];
        a += y;
      }
      return a;
    }

    const c1 = populate('#');
    const c2 = populate('#');
    const angle = Math.round(Math.random() * 360);
    return {background: "linear-gradient(" + angle + "deg, " + c1 + ", " + c2 + ")"};
  }

  render() {
    const { openModal, currentUser, user, users, 
      tracks, selectedTrack, playing, togglePlay,
      receiveSelectedTrack } = this.props;
    let avatarImg, followingsModule, playButton, playAction, 
      followIcon, followText;

    if (Object.keys(users).length === 1) {
      return (
        <button onClick={this.props.fetchUsers}>Loading...</button>
      )
    } else {
      avatarImg = <img src={user.avatarUrl} alt="" />
      followingsModule = user.followee_ids.map(followee_id => {
        const followee = users[followee_id];
        return (
          <li className="sidebarItem" key={followee_id}>
            <Link to={`/users/${followee_id}`}>
              <img className="sidebarAvatar" src={followee.avatarUrl} alt={followee.username}/>
              <p>{followee.username}</p>
            </Link>
          </li>
        )}
      );
    };

    if (currentUser.followee_ids.includes(user.id)) {
      followIcon = <FaUserMinus />;
      followText = "Unfollow";
    } else {
      followIcon = <FaUserPlus />;
      followText = "Follow";
    }

    const upnButtons = (currentUser.id === user.id) ? (
      <>
        <button className="not-allowed"><span><GrShare /></span>Share</button>
        <button onClick={() => openModal('profileEdit')}><span><FaPencilAlt /></span>Edit</button>
      </>
    ) : (
      <>
        <button><span><FiRadio /></span>Station</button>
        <button onClick={this.handleFollowing}>
          <span>{followIcon}</span>{followText}
        </button>
        <button><span><GrShare /></span>Share</button>
        <button><span><GrMail /></span></button>
        <button><span><BsThreeDots /></span></button>
      </>
    );

    if (selectedTrack) {
      playButton = playing ? <FaPauseCircle /> : <FaPlayCircle />;
      playAction = () => togglePlay();
    } else {
      playButton = <FaPlayCircle />;
      playAction = track => receiveSelectedTrack(track);
    }
      
    // const userAllListLis = tracks.map(track => (
    //   <li className="soundBody" key={track.id}>
    //     <div className="soundArtwork">
    //       <Link to={`/tracks/${track.id}`}><img src={track.photoUrl} alt={track.title}/></Link>
    //     </div>
    //     <div className="soundContent">
    //       <div className="soundContent-header">
    //         <button className="sch-play-button" 
    //           onClick={() => playAction(track)}>
    //           {playButton}
    //         </button>
    //         <div className="sch-title-container">
    //           <p>{track.uploader}</p>
    //           <Link to={`/tracks/${track.id}`}>{track.title}</Link>
    //         </div>
    //         <div className="sch-additional">
    //           <time>2 weeks ago</time>
    //           <a>{track.genre}</a>
    //         </div>
    //       </div>
    //       <div className="soundContent-waveform"></div>
    //       <div className="soundContent-comment">
    //         <img src="" alt=""/>
    //         <form className="scc-commentForm">
    //           <input type="text" placeholder="Write a comment"/>
    //         </form>
    //       </div>
    //       <div className="soundContent-footer">
    //         <div className="scf-actions">
    //           <button></button>
    //           <button></button>
    //           <button></button>
    //           <button></button>
    //         </div>
    //         <div className="scf-footerRight">
    //           <ul>
    //             <li></li>
    //             <li></li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </li>
    // ))

    return (
      <>
        <NavBar />
        <div className="user-profile">
          <div className="user-profile-banner" style={this.generateBackground()}>
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
                    <li key={track.id}>
                      <PlaylistItem
                        track={track}
                        receiveSelectedTrack={receiveSelectedTrack} />
                    </li>
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
                <ul className="followingsModule">
                  {followingsModule}
                </ul>
              </article>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ProfileShow;
