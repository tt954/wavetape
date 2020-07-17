import React from 'react';
import { Link } from 'react-router-dom';

const TrackItem = props => {
  const { track } = props;

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
            <p>{track.uploader}</p>
            <Link to={`/tracks/${track.id}`}>{track.title}</Link>
          </div>
          <div className="sch-additional">
            <time>2 weeks ago</time>
            <a>{track.genre}</a>
          </div>
        </div>
        <div className="soundContent-waveform"></div>
        <div className="soundContent-comment">
          <img src="" alt=""/>
          <form className="scc-commentForm">
            <input type="text" placeholder="Write a comment"/>
          </form>
        </div>
        <div className="soundContent-footer">
          <div className="scf-actions">
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
          <div className="scf-footerRight">
            <ul>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  )
}

export default TrackItem;
