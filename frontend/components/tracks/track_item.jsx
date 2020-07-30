import React from 'react';
import { Link } from 'react-router-dom';
import WaveSurfer from 'wavesurfer.js';

import { RiRepeatLine } from 'react-icons/ri';
import { FaHeart, FaCommentAlt, FaShareSquare, FaPlay, FaEllipsisH } from 'react-icons/fa';

class TrackItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waveform: "",
    };
  }

  componentDidUpdate() {  
    const wfdiv = document.getElementById("soundContent-waveform");
    this.state.waveform = WaveSurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      container: wfdiv,
      backend: 'WebAudio',
      height: 80,
      progressColor: '#2D5BFF',
      responsive: true,
      waveColor: '#EFEFEF',
      cursorColor: 'transparent',
    });
  }

  render() {
    const { track, playButton, playAction,
      currentUser, selectedTrack, receiveSelectedTrack } = this.props;

    const loadWave = () => {
      (selectedTrack) ? this.state.waveform.load(selectedTrack.avatarUrl) : null;
    }

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

          <div id="soundContent-waveform"></div>

          <div className="soundContent-comment">
            <img className="scc-commentAvatar" src={currentUser.avatarUrl} alt={currentUser.username}/>
            <form className="scc-commentForm">
              <input type="text" placeholder="Write a comment"/>
            </form>
          </div>
          <div className="soundContent-footer">
            <div className="scf-actions">
              <button><FaHeart/>3.15K</button>
              <button><RiRepeatLine />68</button>
              <button><FaShareSquare />Share</button>
              <button><FaEllipsisH />More</button>
            </div>
            <div className="scf-footerRight">
              <div><FaPlay />212</div>
              <div><FaCommentAlt />689</div>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default TrackItem;
