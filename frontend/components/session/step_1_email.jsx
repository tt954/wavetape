import React from 'react';

const Step1 = props => {
  if (props.currentStep !== 1 && props.currentStep !== 2) {
    return null
  }
  const emailInput = (props.currentStep === 2) ? "email-input" : "";

  return (
    <input
      className="form-control"
      id={emailInput}
      type="text"
      name="email"
      placeholder="Your email address"
      value={props.email}
      onChange={props.update} 
    />
  )
}

export default Step1;