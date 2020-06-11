import React from 'react';

import { FaPlayCircle } from 'react-icons/fa';

const PlaylistItem = props => {
  const { track, receiveSelectedTrack } = props;
  return (
    <>
      <div className="smt-li-artwork">
        <button className="track-play-container"
          onClick={() => receiveSelectedTrack(track)}>
          <span className="track-play-button-background"></span>
          <span className="track-play-button"><FaPlayCircle size={60}/></span>
          <img src={track.photoUrl} alt={track.title} />
        </button>
      </div>
      <div className="smt-li-description">
        <a className="smt-li-title" href={`#/tracks/${track.id}`}>{track.title}</a>
        <a className="smt-li-artist" href={`#/users/${track.uploader_id}`}>{track.uploader}</a>
      </div>
    </>
  )
}

export default PlaylistItem;