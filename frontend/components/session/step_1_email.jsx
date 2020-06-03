import React from 'react';

const Step1 = props => {
  if (props.currentStep !== 1) {
    return null
  }
  return (
    <div className="form-group">
      <div className="provider-btns">
        <button onClick={props.handleDemo}>Demo User</button>
        <button>Continue with Google</button>
        <button>Continue with Apple</button>
      </div>
      <div className="auth-separator"><span>or</span></div>
      <input
        className="form-control"
        id="email"
        name="email"
        type="text"
        placeholder="Your email address"
        value={props.email}
        onChange={props.handleChange} 
      />
    </div>
  )
}

export default Step1;