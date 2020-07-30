import React from 'react';

import { FaChevronDown } from 'react-icons/fa';

class UploadForm extends React.Component {
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
      this.props.handleTrackFile(e.dataTransfer.files[0]);
      this.state.dragCounter = 0;
    }
  }

  handleChoose(e) {
    const track = e.currentTarget.files[0];
    this.props.handleTrackFile(track);
  }

  render() {
    if (this.props.currentStep === 1) {
      return (
        <div className="upload-main">
          <div className="ulm-tryPro">
            <div className="ulm-tryPro-left">
              <div className="upload-limit">
                <p>0% of free uploads used</p>
                <FaChevronDown />
              </div>
              <div className="upload-limit-meter"></div>
              <p>Try Pro for unlimited uploads.</p>
            </div>
            <div className="ulm-tryPro-right">
              <button>Try Pro Unlimited</button>
            </div>
          </div>

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
                accept="audio/mpeg"
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

          <div className="ulm-footer">
            <div className="ulm-footer-top">
              <p>
                Supported file types and sizes ⁃ Upload troubleshooting tips ⁃
                Copyright FAQs
                  </p>
              <p>
                By uploading, you confirm that your sounds comply with the
                    <span> Copyright Terms</span> and you don't infringe anyone
                    else's rights.
                  </p>
            </div>
            <div className="ulm-footer-bottom">
              <p>
                Legal ⁃ Privacy ⁃ Cookies ⁃ Imprint ⁃ Creator Resources ⁃ Blog
                ⁃ Charts ⁃ Popular searches
                  </p>
              <p>Visit site's Github page</p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default UploadForm;