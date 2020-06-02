import React from 'react';

const Step2 = props => {
  if (props.currentStep !== 2) {
    return null
  }
  return (
    <div className="form-group">
      <label htmlFor="password">Choose a password</label>
      <input
        className="form-control"
        id="password"
        name="password"
        type="password"
        placeholder="Enter password"
        value={props.password}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default Step2;