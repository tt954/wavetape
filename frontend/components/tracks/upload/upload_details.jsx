import React from 'react';

import { FaCamera } from 'react-icons/fa';
import { generateBackground } from '../../../util/misc_api_util';

const UploadDetails = props => {
  const { currentStep, update, cancel, 
    handlePhotoFile, handleSubmit, photoUrl } = props;
  
  const uploadPhotoBtn = (
    <>
    <input 
      type="file"
      id="photoUpload"
      className="inputfile"
      onChange={handlePhotoFile}
      accept='image/*'
      />
    <label htmlFor="photoUpload"><FaCamera /><span>Upload image</span></label>
    </>
  )

  // const photo = photoUrl ? <img className="track-photo-preview" src={photoUrl} /> : null;

  if (currentStep === 2) {
    return (
      <div className="upload-details">
        <div className="uld-main">
          <ul className="udm-header">
            <li>Basic info</li>
            <li className="not-allowed">Metadata</li>
            <li className="not-allowed">Permissions</li>
          </ul>

          <div className="udm-detailsForm">
            <div className="track-photo">
              <img src={photoUrl} alt=""/>
              {uploadPhotoBtn}
            </div>

            <div className="track-details">
              <label className="td-title"><p>Title <span>*</span></p>
                <input 
                  type="text"
                  value={props.title}
                  onChange={update} 
                  placeholder="Name your track"/>
              </label>

              <label className="td-genre"><p>Genre</p>
                <select onChange={update}>
                  <option value="" disabled>None</option>
                  <option value="Custom">Custom</option>
                  <option value="Alternative">Alternative</option>
                  <option value="Ambient">Ambient</option>
                  <option value="Classical">Classical</option>
                  <option value="Country">Country</option>
                  <option value="Dance & EDM">Dance & EDM</option>
                  <option value="Dancehall">Dancehall</option>
                  <option value="Deep House">Deep House</option>
                  <option value="Disco">Disco</option>
                  <option value="Drum & Bass">Drum & Bass</option>
                  <option value="Dubstep">Dubstep</option>
                  <option value="Electronic">Electronic</option>
                  <option value="Folk & Singer-Songwriter">Folk & Singer-Songwriter</option>
                  <option value="Hip-hop & Rap">Hip-hop & Rap</option>
                  <option value="House">House</option>
                  <option value="Indie">Indie</option>
                  <option value="Jazz & Blues">Jazz & Blues</option>
                  <option value="Latin">Latin</option>
                  <option value="Metal">Metal</option>
                  <option value="Piano">Piano</option>
                  <option value="Pop">Pop</option>
                  <option value="R&B & Soul">R&B & Soul</option>
                  <option value="Reggae">Reggae</option>
                  <option value="Rock">Rock</option>
                  <option value="Soundtrack">Soundtrack</option>
                  <option value="Techno">Techno</option>
                  <option value="Trance">Trance</option>
                  <option value="Trap">Trap</option>
                  <option value="World">World</option>
                </select>
              </label>

              <label className="td-description"><p>Description</p>
                <textarea 
                  placeholder="Describe your track"
                  onChange={update}>
                </textarea>
              </label>
            </div>
          </div>

          <div className="udm-footer">
            <div className="udm-footer-left">
              <p><span>*</span> Required fields</p>
            </div>
            <div className="udm-footer-right">
              <button onClick={cancel}>Cancel</button>
              <button onClick={handleSubmit}>Save</button>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export default UploadDetails;