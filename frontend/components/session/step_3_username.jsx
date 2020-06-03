import React from 'react';

const Step3 = props => {
  if (props.currentStep !== 3 || props.formType === 'signin') {
    return null
  }
  return (
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
  );
}

export default Step3;