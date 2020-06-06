import React from 'react';

const Step3 = props => {
  if (props.currentStep !== 3 || props.formType === 'signin') {
    return null;
  }

  return (
    <>
      <label>Choose your display name
        <br/>
        <input
          className="form-control"
          id="username"
          name="username"
          type="text"
          value={props.username}
          onChange={props.update}
        />
      </label>
      <p className="step3-msg">Your display name can be anything you like. Your name or artist name are good choices.</p>
    </>
  );
}

export default Step3;