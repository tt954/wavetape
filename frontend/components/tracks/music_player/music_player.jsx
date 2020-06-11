import React from 'react';
import { Link } from 'react-router-dom';

import { 
  IoMdPlay, IoMdPause, IoMdSkipBackward, IoMdSkipForward,
  IoMdVolumeHigh, IoMdVolumeLow, IoMdVolumeOff,
  IoIosShuffle,  } from 'react-icons/io';
import { TiArrowLoop } from 'react-icons/ti';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.updateProgress = this.updateProgress.bind(this);
    this.updateElapsed = this.updateElapsed.bind(this);
  }

  componentDidMount() {
    const audio = document.getElementById("audio");
    audio.addEventListener("timeupdate", this.updateProgress);
    audio.addEventListener("timeupdate", this.updateElapsed);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.playing !== this.props.playing) {
      this.props.playing ? this.audio.play() : this.audio.pause();
    }
    if (prevProps.selectedTrack !== this.props.selectedTrack) this.audio.play();
  }

  updateProgress() {
    const audio = document.getElementById("audio");
    const progressBar = document.getElementById("progressBar");
    const progressBall = document.getElementById("progressBall");
    const percent = audio.currentTime / audio.duration * 100;
    progressBar.style.width = `${percent}%`;
    progressBall.style.left = `${percent}%`;
  }

  updateElapsed() {
    const audio = document.getElementById("audio");
    const timeElasped = document.getElementById("timeElasped");
    const totalTime = document.getElementById("totalTime");
    timeElasped.innerHTML = this.formatSeconds(audio.currentTime);
    totalTime.innerHTML = this.formatSeconds(audio.duration);
  }

  formatSeconds(s) {
    return new Date(s * 1000).toISOString().substr(14, 5);
  }

  render() {
    const { playing, selectedTrack, togglePlay } = this.props;
    const audioSrc = selectedTrack ? selectedTrack.trackUrl : null;
    const playControl = playing ? <IoMdPause /> : <IoMdPlay />;

    return (
      <div className="music-player-bar">
        <section className="music-player">
          <audio id="audio" ref={ref => this.audio = ref} src={audioSrc} />
          <div className="music-player-controls">
            <button className="mpc-button skip-control controlPrev"><IoMdSkipBackward /></button>

            <button 
              className="mpc-button play-control controlPlay"
              onClick={togglePlay}>
              {playControl}
            </button>

            <button className="mpc-button skip-control controlNext"><IoMdSkipForward /></button>

            <button className="mpc-button controlShuffle"><IoIosShuffle /></button>
            <button className="mpc-button controlRepeat"><TiArrowLoop /></button>

            <div className="mbc-progress progress-control">
              <div id="timeElasped">00:00</div>
              <div className="progress">
                <div id="progressBar"></div>
                <div id="progressBall"></div>
              </div>
              <div id="totalTime">00:00</div>
            </div>

            <div className="mbc-button volume-control"></div>
              
            <div className="mbc-soundBadge">
              {/* <a className="soundBadge-avatar" href=""><img src={selectedTrack.photoUrl}></img></a> */}
              <div>
                {/* <Link to={`/users/${selectedTrack.uploader_id}`}></Link> */}
                <div></div>
              </div>
            </div>
          </div>

        </section>
      </div>
    );
  }
}

export default MusicPlayer;