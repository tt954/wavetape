import React from 'react';

import NavBar from  '../../nav_bar/nav_bar_container';
import UploadForm from './upload_form';
import UploadDetails from './upload_details';
import { GrShare } from 'react-icons/gr';

class TrackUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      title: '',
      description: '',
      genre: '',
      trackFile: null,
      photoFile: null,
      trackUrl: '',
      photoUrl: '',
    }

    this.handleTrackFile = this.handleTrackFile.bind(this);
    this.handlePhotoFile = this.handlePhotoFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  handleTrackFile(track) {
    if (track && track.type === 'audio/mpeg') {
      this.setState({
        currentStep: 2,
        title: track.name.split(".")[0],
        trackFile: track,
      });
    }
  }

  handlePhotoFile(e) {
    const photo = e.target.files[0];
    const fr = new FileReader();
    
    if (photo) {
      fr.onload = e => {
        this.setState({
          photoFile: photo,
          photoUrl: fr.result,
        });
      }
      fr.readAsDataURL(photo);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, description, genre, trackFile, photoFile } = this.state;
    const fd = new FormData();

    fd.append('track[title', title);
    fd.append('track[description]', description);
    fd.append('track[genre]', genre);
    fd.append('track[uploader_id]', this.props.currentUser.id);
    fd.append('track[track]', trackFile);
    fd.append('track[photo]', photoFile);
    console.log(fd)
    debugger

    this.props.createTrack(fd).then(
      console.log("successful")
    )
  }

  update(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  cancel() {
    this.setState({
      currentStep: 1,
      title: '',
      description: '',
      genre: '',
      privacy: '',
      trackFile: null,
      photoFile: null,
    });
  }

  render() {
    return (
      <>
        <NavBar />
        <div className="upload">
          <div className="upload-nav">
            <ul className="upload-nav-left">
              <li>Upload</li>
              <li>Mastering</li>
              <li>Your Tracks</li>
              <li>Stats</li>
              <li>Pro Plans</li>
              <li>Pulse</li>
            </ul>
            <a className="upload-nav-right not-allowed" href="#">
              <GrShare /><span>Creators on SoundCloud</span>
            </a>
          </div>

          <UploadForm
            currentStep={this.state.currentStep}
            update={this.update}
            handleTrackFile={this.handleTrackFile}
          />

          <UploadDetails
            currentStep={this.state.currentStep}
            update={this.update}
            cancel={this.cancel}
            handlePhotoFile={this.handlePhotoFile}
            photoUrl={this.state.photoUrl}
            handleSubmit={this.handleSubmit}
            title={this.state.title}
          />

          <div className="upload-footer"></div>
        </div>
      </>
    );
  }

}

export default TrackUpload;