import React from 'react';

class Playlist extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.plTitle}</h3>
        <p>{this.props.plTagline}</p>
      </div>
    )
  }
}

export default Playlist;