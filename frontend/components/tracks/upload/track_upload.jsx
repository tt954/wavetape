import React from 'react';

import NavBar from  '../../nav_bar/nav_bar_container';
import TrackUploadForm from './track_upload_form';

class TrackUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      genre: '',
      privacy: '',
      trackFile: null,
    }

    this.handleFile = this.handleFile.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
  }

  handleFile(e) {
    const track = e.currentTarget.files[0];

    if (track) {

    }
  }

  update(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <>
        <NavBar />
        <div className="upload">
          <div className="upload-nav"></div>

          <div className="upload-main">
            <div className="ulm-tryPro"></div>
            <TrackUploadForm
              update={this.update}
              handleFile={this.handleFile}
            />
            <div className="ulm-footer"></div>
          </div>

          <div className="upload-footer"></div>
        </div>
      </>
    );
  }

}

export default TrackUpload;