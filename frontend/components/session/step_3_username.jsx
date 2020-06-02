import React from 'react';

const Step3 = props => {
  if (props.currentStep !== 3) {
    return null
  }
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="username">Choose your display name</label>
        <input
          className="form-control"
          id="username"
          name="username"
          type="text"
          placeholder="Enter username"
          value={props.username}
          onChange={props.handleChange}
        />
      </div>
      {/* <button className="btn btn-success btn-block">Get started</button> */}
    </React.Fragment >
  );
}

export default Step3;