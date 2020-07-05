import React from 'react';

import NavBar from  '../../nav_bar/nav_bar_container';
import TrackUploadForm from './track_upload_form';
import { FaChevronDown } from 'react-icons/fa';

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
            <TrackUploadForm
              update={this.update}
              handleFile={this.handleFile}
            />
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

          <div className="upload-footer"></div>
        </div>
      </>
    );
  }

}

export default TrackUpload;