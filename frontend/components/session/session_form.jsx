import React from 'react';

import Step1 from './step_1_email';
import Step2 from './step_2_password';
import Step3 from './step_3_username';

class SessionForm extends React.Component {
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
    this.handleDemo = this.handleDemo.bind(this);
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
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleDemo(e) {
    e.preventDefault();
    const user = Object.assign({
      email: "tt@gmail.com",
      password: "strawberries",
    });
    this.props.signin(user).then(this.props.closeModal);
  }

  _next() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    // debugger;
    let btnNext;
    if (currentStep === 2 && this.props.formType === "signup") {
      btnNext = "Accept & Continue";
    } else {
      btnNext = "Continue";
    }
  
    if (currentStep < this.props.lastStep) {
      return (
        <button
          className="session-form-btn"
          type="button" onClick={this._next}>
          {btnNext}
        </button>
      )
    }
    return null;
  }

  render() {
    const { formType, lastStep } = this.props;
    const btnText = (formType === "signin") ? "Sign in" : "Get started"
    const btnSubmit = () => {
      if (this.state.currentStep === lastStep) {
        return (
          <button 
            className = "session-form-btn"
            type="submit" >{ btnText }</button>
        )
      }
    }

    return (
      <React.Fragment>
        <form className="session-form" onSubmit={this.handleSubmit}>
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
            handleDemo={this.handleDemo}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
            formType={formType}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
            formType={formType}
          />
          <div className="session-form-btn-container">
            {this.nextButton()}
            {btnSubmit()}
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default SessionForm;