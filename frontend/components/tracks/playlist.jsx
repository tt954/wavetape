import React from 'react';

import PlaylistItem from './playlist_item';

class Playlist extends React.Component {
  render() {
    const { tracks, receiveSelectedTrack } = this.props;
    
    return (
      <>
        <div className="playlist-title">
          <h2>{this.props.plTitle}</h2>
          <p>{this.props.plTagline}</p>
        </div>
        <ul className="playlist-content">
          {tracks.map(track => 
            <li key={track.id}>
              <PlaylistItem
                track={track}
                receiveSelectedTrack={receiveSelectedTrack}/>
            </li>
          )}
        </ul>
      </>
    )
  }
}

export default Playlist;