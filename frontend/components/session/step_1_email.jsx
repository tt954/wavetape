import React from 'react';

const Step1 = props => {
  if (props.currentStep !== 1 && props.currentStep !== 2) {
    return null
  }

  return (
    <input
      className="form-control"
      type="text"
      name="email"
      placeholder="Your email address"
      value={props.email}
      onChange={props.update} 
    />
  )
}

export default Step1;