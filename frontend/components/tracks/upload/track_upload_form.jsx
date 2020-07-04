import React from 'react';

class TrackUploadForm extends React.Component {
  render() {
    return (
      <div className="ulm-dropzone">
        <span>Drag and drop your track here</span>
        <input
          type="file"
          id="trackUpload"
          className="inputfile"
          onChange={this.props.handleFile}
        />
        <label for="trackUpload">or choose file to upload</label>
      </div>
    );
  }
}

export default TrackUploadForm;