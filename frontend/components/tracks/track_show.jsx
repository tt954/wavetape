import React from 'react';

import NavBar from '../nav_bar/nav_bar_container';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTrack(this.props.match.params.trackId);
  }

  render() {
    const { track } = this.props;
    let trackTitle, trackArtwork, trackFile;

    if (track === undefined) {
      return <button onClick={this.props.fetchTrack}>Fetch Track</button>
    } else {
      trackTitle = <h3>{track.title}</h3>;
      trackArtwork = <img src={track.photoUrl} alt=""/>;
      trackFile = (
        <audio controls>
          <source src={track.trackUrl} type="audio/mpeg"/>
        </audio>
      );
    }

    return(
      <>
        <NavBar />
        <div className="track-show-banner">
          <div className="tsb-artwork">
            {trackArtwork}
          </div>
          <div className="tsb-title">
            {trackTitle}
            {trackFile}
          </div>
          <div className="tsb-info"></div>
          <div className="tsb-playerArea"></div>
        </div>
      </>
    )
  }
}

export default TrackShow;