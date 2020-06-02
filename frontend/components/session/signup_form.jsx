import React from 'react';

import Step1 from './step_1_email';
import Step2 from './step_2_password';
import Step3 from './step_3_username';

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      email: '',
      password: '',
      username: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this._next = this._next.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password, username } = this.state;
    const user = Object.assign({}, { email, password, username });
    this.props.processForm(user);
  }

  _next() {
    debugger;
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button" onClick={this._next}>
          Next
        </button>
      )
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          {/* render the form steps and pass required props in */}
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            username={this.state.username}
          />
          {this.nextButton()}
          <button className="btn btn-success btn-block">Get started</button>
        </form>
      </React.Fragment>
    );
  }
}

export default SignupForm;

// render errors
  // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, i) =>
  //         <li key={`error-${i}`}>{error}</li>
  //       )}
  //     </ul>
  //   )
  // }

// previousButton() {
//   let currentStep = this.state.currentStep;
//   if (currentStep !== 1) {
//     return (
//       <button
//         className="btn btn-secondary"
//         type="button" onClick={this._prev}>
//         Previous
//       </button>
//     )
//   }
//   return null;
// }

// _prev() {
//   let currentStep = this.state.currentStep;
//   currentStep = currentStep <= 1 ? 1 : currentStep - 1
//   this.setState({
//     currentStep: currentStep
//   })
// }
