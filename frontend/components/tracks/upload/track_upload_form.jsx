import React from 'react';

class TrackUploadForm extends React.Component {
  render() {
    return (
      <>
      <input
        type="file"
        onChange={this.props.handleFile} />
      </>
    )
  }
}

export default TrackUploadForm;