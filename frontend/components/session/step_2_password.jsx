import React from 'react';

const Step2 = props => {
  if (props.currentStep !== 2) {
    return null;
  };

  const placeholder = (props.formType === "signin") ? "Your password" : "Choose your password";
  return (
    <input
      className="form-control"
      name="password"
      type="password"
      placeholder={placeholder}
      value={props.password}
      onChange={props.update}
    />
  );
}

export default Step2;