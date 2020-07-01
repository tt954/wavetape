import React from 'react';

const Step1 = props => {
  if (props.currentStep !== 1 && props.currentStep !== 2) {
    return null
  }

  return (
    <div className={`email-input ${props.currentStep === 2 ? "step2" : ""}`}>
      <input
        className="form-control"
        type="text"
        name="email"
        placeholder="Your email address"
        value={props.email}
        onChange={props.update}
      />
      {props.prevButton}
    </div>
  );
}

export default Step1;