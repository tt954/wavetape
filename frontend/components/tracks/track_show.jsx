import React from 'react';
import { Link } from 'react-router-dom';
import { uploadedAt } from '../../util/misc_api_util';
import WaveSurfer from 'wavesurfer.js';

import { FaPlayCircle, FaPauseCircle, FaHeart, FaPlay,
  FaShareSquare, FaEllipsisH, FaCommentAlt, FaUserFriends,
  FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { RiRepeatLine } from 'react-icons/ri';
import { GiSoundWaves } from 'react-icons/gi'

import NavBar from '../nav_bar/nav_bar_container';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleFollowing = this.handleFollowing.bind(this);
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId);
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
    const { track, playing, selectedTrack, currentUser,
      togglePlay, receiveSelectedTrack } = this.props;

    const followButton = track ? (
      <button
        className={`tal-followButton followButton ${(currentUser.followee_ids.includes(track.uploader_id)) ? "followed" : ""}`}
        onClick={() => this.handleFollowing(track.uploader_id)}>
        {(currentUser.followee_ids.includes(track.uploader_id)) ? <FaUserMinus /> : <FaUserPlus />}
        {(currentUser.followee_ids.includes(track.uploader_id)) ? "Unfollow" : "Follow"}
      </button>
    ) : null;

    const trackShow = track ? (
      <>
        <div className="track-show-banner">
          <div className="tsb-playerArea">
            <div className="tsb-title">
              <button
                className="tsb-title-playButton"
                onClick={selectedTrack ? togglePlay : () => receiveSelectedTrack(track)}>
                {playing ? <FaPauseCircle /> : <FaPlayCircle />}
              </button>
              <div className="tsb-title-trackInfo">
                <div className="tsb-tt-left">
                  <h3>{track.uploader}</h3>
                  <h3>{track.title}</h3>
                </div>
                <p>2 weeks ago</p>
              </div>
            </div>
            <div id="tsb-waveform"></div>
          </div>

          <img className="tsb-artwork" src={track.photoUrl} alt={track.title} />
        </div >

        <div className="track-show-body">
          <div className="tsb-main-container">
            <div className="tsb-main">
              <div className="tsb-actions">
                <div className="tsb-actions-comment">
                  <img className="tac-commentAvatar" src={currentUser.avatarUrl} alt={currentUser.username} />
                  <form className="tac-commentForm">
                    <input type="text" placeholder="Write a comment" />
                  </form>
                </div>

                <div className="tsb-actions-bottom">
                  <div className="tab-actions-left">
                    <button><FaHeart />3.15K</button>
                    <button><RiRepeatLine />68</button>
                    <button><FaShareSquare />Share</button>
                    <button><FaEllipsisH />More</button>
                  </div>
                  <div className="tab-actions-right">
                    <div><FaPlay />212</div>
                    <div><FaHeart />689</div>
                    <div><RiRepeatLine size={14}/>194</div>
                  </div>
                </div>
              </div>

              <div className="tsb-about">
                <div className="tsb-about-left">
                  <Link className="tal-artistInfo" to={`/users/${track.uploader_id}`}>
                    <img className="tal-artistAvatar" src={track.uploaderAvatar} alt={`${track.uploader}'s avatar`} />
                    <h3>{track.uploader}</h3>
                    <div className="tal-artistStats">
                      <p><FaUserFriends />{track.uploaderFollowers.length}</p>
                      <p><GiSoundWaves />{track.uploaderTracks.length}</p>
                    </div>
                  </Link>

                  {(track.uploader_id === currentUser.id || !currentUser) ? null : followButton}
                </div>

                <div className="tsb-about-right">
                  <div className="tar-description">
                    <p>Description goes here</p>
                  </div>

                  <button class="tar-showMore">Show more</button>

                  <div className="tal-comments">
                    <div className="tar-commentHeader"><FaCommentAlt /><span>495 comments</span></div>
                    <ul className="tar-commentsList">
                      <li className="tar-commentItem">
                        <img src={currentUser.avatarUrl} alt={currentUser.username}/>
                        <div className="tar-ci-body">
                          <div className="tcb-leftComment">
                            <p><span>{currentUser.username}</span> at <span>1:35</span>:</p>
                            <p>test comment, this song is so good!!!</p>
                          </div>
                          <p className="tcb-rightTime">{uploadedAt(track.uploadedAt.slice(0, 10))}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tsb-sidebar"></div>
        </div>
      </>
    ) : null;

    return(
      <>
        <NavBar />
        {trackShow}
      </>
    )
  }
}

export default TrackShow;