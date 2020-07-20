import React from 'react';

class TrackUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drag: false,
      dragCounter: 0,
      files: [],
    };
    this.handleDragIn = this.handleDragIn.bind(this);
    this.handleDragOut = this.handleDragOut.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleChoose = this.handleChoose.bind(this);
  }

  handleDragIn(e) {
    e.preventDefault();
    e.stopPropagation();
    this.state.dragCounter++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({ drag: true });
    }
  }

  handleDragOut(e) {
    e.preventDefault();
    e.stopPropagation();
    this.state.dragCounter--;
    if (this.state.dragCounter > 0) return;
    this.setState({ drag: false });
  }

  handleDrag(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ drag: false });
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      this.props.handleFile(e.dataTransfer.files[0]);
      this.state.dragCounter = 0;
    }
  }

  handleChoose(e) {
    const track = e.currentTarget.files[0];
    this.props.handleFile(track);
  }

  render() {
    return (
      <div
        className="ulm-dropzone"
        draggable
        onDragOver={this.handleDrag}
        onDragEnter={this.handleDragIn}
        onDragLeave={this.handleDragOut}
        onDrop={this.handleDrop}
      >
        <div className="ulm-dropzone-top">
          <span>Drag and drop your track here</span>
          <input
            type="file"
            id="trackUpload"
            className="inputfile"
            onChange={this.handleChoose}
          />
          <label htmlFor="trackUpload">or choose file to upload</label>
        </div>
        <div className="ulm-dropzone-bottom">
          <p>
            Provide FLAC, WAV, ALAC, or AIFF for highest audio quality. Learn
            more about lossless HD.
          </p>
        </div>
      </div>
    );
  }
}

export default TrackUploadForm;