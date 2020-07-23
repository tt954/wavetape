import React from 'react';
import { Link } from 'react-router-dom';

import { IoMdHeart, IoIosPlay } from 'react-icons/io';
import { RiRepeatLine } from 'react-icons/ri';
import { FaCommentAlt, FaShareSquare } from 'react-icons/fa';

const TrackItem = props => {
  const { track, playButton, playAction, currentUser } = props;

  return (
    <li className="soundBody" key={track.id}>
      <div className="soundArtwork">
        <Link to={`/tracks/${track.id}`}><img src={track.photoUrl} alt={track.title}/></Link>
      </div>
      <div className="soundContent">
        <div className="soundContent-header">
          <button className="sch-play-button" 
            onClick={() => playAction(track)}>
            {playButton}
          </button>
          <div className="sch-title-container">
            <div className="sch-title">
              <p>{track.uploader}</p>
              <Link to={`/tracks/${track.id}`}>{track.title}</Link>
            </div>
            <div className="sch-additional">
              <time>2 weeks ago</time>
              <a># {track.genre}</a>
            </div>
          </div>
        </div>
        <div className="soundContent-waveform"></div>
        <div className="soundContent-comment">
          <img className="scc-commentAvatar" src={currentUser.avatarUrl} alt={currentUser.username}/>
          <form className="scc-commentForm">
            <input type="text" placeholder="Write a comment"/>
          </form>
        </div>
        <div className="soundContent-footer">
          <div className="scf-actions">
            <button><IoMdHeart />315</button>
            <button><RiRepeatLine />68</button>
            <button><FaShareSquare />Share</button>
          </div>
          <div className="scf-footerRight">
            <div><IoIosPlay />212</div>
            <div><FaCommentAlt />689</div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default TrackItem;
