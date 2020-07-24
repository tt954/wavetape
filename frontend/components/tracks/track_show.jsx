import React from 'react';
import WaveSurfer from 'wavesurfer.js';

import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';

import NavBar from '../nav_bar/nav_bar_container';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waveform: "",
    }
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId);
    // const waveformContainer = document.querySelector(".tsb-waveform");
    // this.state.waveform = WaveSurfer.create({
    //   barWidth: 3,
    //   cursorWidth: 1,
    //   container: waveformContainer,
    //   backend: 'WebAudio',
    //   height: 80,
    //   progressColor: '#2D5BFF',
    //   responsive: true,
    //   waveColor: '#EFEFEF',
    //   cursorColor: 'transparent',
    // });
    // this.state.waveform.load(this.props.selectedTrack.trackUrl)
  }

  render() {
    const { track, playing, selectedTrack,
      togglePlay, receiveSelectedTrack } = this.props;

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
            <div className="tsb-waveform"></div>
          </div>

          <img className="tsb-artwork" src={track.photoUrl} alt={track.title} />
        </div >

        <div className="track-show-body">

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