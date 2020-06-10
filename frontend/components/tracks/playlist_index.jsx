import React from 'react';

const PlaylistIndex = props => {
  const { track } = props;
  return (
    <>
      <div className="smt-li-artwork"><button><img src={track.photoUrl} alt={track.title} /></button></div>
      <div className="smt-li-description">
        <a className="smt-li-title" href={`#/tracks/${track.id}`}>{track.title}</a>
        <a className="smt-li-artist" href={`#/users/${track.uploader_id}`}>artist name</a>
      </div>
    </>
  )
}

export default PlaylistIndex;