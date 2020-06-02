import React from 'react';

const Step1 = props => {
  if (props.currentStep !== 1) { // Prop: The current step
    return null
  }
  return (
    <div className="form-group">
      <input
        className="form-control"
        id="email"
        name="email"
        type="text"
        placeholder="Your email address"
        value={props.email} // Prop: The email input data
        onChange={props.handleChange} // Prop: Puts data into state
      />
    </div>
  )
}

export default Step1;