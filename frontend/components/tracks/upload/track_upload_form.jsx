import React from 'react';

class TrackUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drag: false,
      dragCounter: 0,
      files: [],
    };
    this.dropRef = React.createRef();
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDragIn = this.handleDragIn.bind(this);
    this.handleDragOut = this.handleDragOut.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  componentDidMount() {
    let div = this.dropRef.current;
    div.addEventListener("dragenter", this.handleDragIn);
    div.addEventListener("dragleave", this.handleDragOut);
    div.addEventListener("dragover", this.handleDrag);
    div.addEventListener("drop", this.handleDrop);
  }

  componentWillUnmount() {
    let div = this.dropRef.current;
    div.removeEventListener("dragenter", this.handleDragIn);
    div.removeEventListener("dragleave", this.handleDragOut);
    div.removeEventListener("dragover", this.handleDrag);
    div.removeEventListener("drop", this.handleDrop);
  }

  handleDrag(e) {
    e.preventDefault();
    e.stopPropagation();
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
    if (this.state.dragCounter === 0) {
      this.setState({ drag: false });
    }
  }

  handleDrop(e) {
    console.log(e)
    e.preventDefault();
    e.stopPropagation();
    this.setState({ drag: false });
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      debugger
      // this.handleFileDrop(e.dataTransfer.files);
      this.props.handleFile(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
      this.state.dragCounter = 0;
    }
  }

  // handleFileDrop(files) {
  //   let fileList = this.state.files;
  //   for (var i = 0; i < files.length; i++) {
  //     debugger
  //     if (!files[i].name) return;
  //     fileList.push(files[i].name);
  //     this.props.handleFile(files[i]);
  //   }
  //   this.setState({ files: fileList });
  // };

  render() {
    return (
      <div className="ulm-dropzone" ref={this.dropRef}>
        <div className="ulm-dropzone-top">
          <span>Drag and drop your track here</span>
          <input
            type="file"
            id="trackUpload"
            className="inputfile"
            onChange={this.props.handleFile}
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