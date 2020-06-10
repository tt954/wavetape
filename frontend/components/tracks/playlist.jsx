import React from 'react';

import PlaylistIndex from './playlist_index';

class Playlist extends React.Component {
  render() {
    const { tracks } = this.props;
    // debugger;
    return (
      <>
        <div className="playlist-title">
          <h2>{this.props.plTitle}</h2>
          <p>{this.props.plTagline}</p>
        </div>
        <ul className="playlist-title-content">
          {tracks.map(track => 
            <li key={track.id}>
              <PlaylistIndex 
                track={track}/>
            </li>
          )}
        </ul>
      </>
    )
  }
}

export default Playlist;