import React from 'react';

class TrackUploadForm extends React.Component {
  render() {
    return (
      <div className="ulm-dropzone">
        <div className="ulm-dropzone-top">
          <span>Drag and drop your track here</span>
          <input
            type="file"
            id="trackUpload"
            className="inputfile"
            onChange={this.props.handleFile}
          />
          <label for="trackUpload">or choose file to upload</label>
        </div>
        <div className="ulm-dropzone-bottom">
          <p>Provide FLAC, WAV, ALAC, or AIFF for highest audio quality. Learn more about lossless HD.</p>
        </div>
      </div>
    );
  }
}

export default TrackUploadForm;