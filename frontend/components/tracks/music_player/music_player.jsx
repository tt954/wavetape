import React from 'react';
import { Link } from 'react-router-dom';

import { 
  IoMdPlay, IoMdPause, IoMdSkipBackward, IoMdSkipForward,
  IoMdVolumeHigh, IoMdVolumeLow, IoMdVolumeOff,
  IoMdHeart, IoMdList  } from 'react-icons/io';
// import { RiShuffleLine } from 'react-icons/ri';
// import { FiRepeat } from  'react-icons/fi';

class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volumeControl: false,
      muted: false,
      volume: 1.0,
    };

    this.updateProgress = this.updateProgress.bind(this);
    this.updateElapsed = this.updateElapsed.bind(this);
    this.toggleVolDisplay = this.toggleVolDisplay.bind(this);
    this.toggleMute = this.toggleMute.bind(this);
    this.updateVolume = this.updateVolume.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
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
    const percent = (audio.currentTime / audio.duration) * 100;
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

  toggleVolDisplay() {
    if (this.state.volumeControl) {
      this.setState({ volumeControl: false });
    } else {
      this.setState({ volumeControl: true });
    }
  }

  toggleMute() {
    const audio = document.getElementById("audio");
    const volume = audio.volume;
    if (audio.muted) {
      audio.muted = false;
      this.setState({ muted: false, volume: volume });
    } else {
      audio.muted = true;
      this.setState({ muted: true, volume: 0 });
    }
  }

  updateVolume(e) {
    const audio = document.getElementById("audio");
    const volume = e.target.value;
    audio.muted = false;
    audio.volume = volume;
    this.setState({ muted: false, volume: volume });
  }

  handlePrev() {
    const audio = document.getElementById("audio");
    const { tracks, selectedTrack, receiveSelectedTrack } = this.props;
    const currentIdx = tracks.indexOf(selectedTrack);
    const prevIdx = currentIdx == 0 ? tracks.length - 1 : currentIdx - 1;

    if (audio.currentTime >= 10) {
      audio.currentTime = 0;
    } else {
      receiveSelectedTrack(tracks[prevIdx]);
    }
  }

  handleNext() {
    const { tracks, selectedTrack, receiveSelectedTrack } = this.props;
    const currentIdx = tracks.indexOf(selectedTrack);
    const nextIdx = currentIdx == tracks.length - 1 ? 0 : currentIdx + 1;
    receiveSelectedTrack(tracks[nextIdx]);
  }

  render() {
    const { playing, selectedTrack, togglePlay } = this.props;

    const audioSrc = selectedTrack ? selectedTrack.trackUrl : null;
    const playControl = playing ? <IoMdPause /> : <IoMdPlay />;

    const trackAvatar = selectedTrack ? (
      <Link className="soundBadge-avatar" to={`/tracks/${selectedTrack.id}`}>
        <img src={selectedTrack.photoUrl}></img>
      </Link>
    ) : null;

    const trackInfo = selectedTrack ? (
      <div className="soundBadge-info">
        <Link to={`/users/${selectedTrack.uploader_id}`}>
          {selectedTrack.uploader}
        </Link>
        <Link to={`/tracks/${selectedTrack.id}`}>{selectedTrack.title}</Link>
      </div>
    ) : null;

    const volumeIcon = () => {
      if (this.state.volume == 0) {
        return <IoMdVolumeOff />; 
      } else if (this.state.volume > 0.5) {
        return <IoMdVolumeHigh />;
      } else if (this.state.volume <= 0.5) {
        return <IoMdVolumeLow />;
      }
    };

    return (
      <div
        className={`music-player-bar ${selectedTrack ? "revealed" : "hidden"}`}
      >
        <section className="music-player">
          <audio id="audio" ref={(ref) => (this.audio = ref)} src={audioSrc} />
          <div className="music-player-controls">
            <button 
              className="mpc-button skip-control controlPrev"
              onClick={this.handlePrev}>
              <IoMdSkipBackward />
            </button>

            <button
              className="mpc-button play-control controlPlay"
              onClick={togglePlay}>
              {playControl}
            </button>

            <button 
              className="mpc-button skip-control controlNext"
              onClick={this.handleNext}>
              <IoMdSkipForward />
            </button>

            {/* <button className="mpc-button controlShuffle">
              <RiShuffleLine />
            </button>
            <button className="mpc-button controlRepeat">
              <FiRepeat />
            </button> */}

            <div className="mpc-progress progress-control">
              <div id="timeElasped">00:00</div>
              <div className="progress">
                <div id="progressBar"></div>
                <div id="progressBall"></div>
              </div>
              <div id="totalTime">00:00</div>
            </div>

            <div
              className="mpc-button volume-control"
              onMouseEnter={this.toggleVolDisplay}
              onMouseLeave={this.toggleVolDisplay}
            >
              <button onClick={this.toggleMute}>{volumeIcon()}</button>
              <div className={`volume-container ${ this.state.volumeControl ? "" : "hidden" }`}>
                <div className="volume">
                  <input
                    type="range"
                    min="0.0"
                    max="1.0"
                    step="any"
                    value={this.state.muted ? 0 : this.state.volume}
                    onChange={this.updateVolume}
                  />
                  <div className="volume-extra"></div>
                </div>
              </div>
            </div>

            <div className="mpc-soundBadge">
              {trackAvatar}
              {trackInfo}
              
              <div className="soundBadge-actions">
                <button><IoMdHeart /></button>
                <button><IoMdList /></button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MusicPlayer;