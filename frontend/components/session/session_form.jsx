import React from 'react';

import Step1 from './step_1_email';
import Step2 from './step_2_password';
import Step3 from './step_3_username';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      count: 0,
      email: '',
      password: '',
      username: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.update = this.update.bind(this);
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.state.count = 0;
    const { email, password, username } = this.state;
    const user = Object.assign({}, { email, password, username });
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleDemo(e) {
    e.preventDefault();
    const user = Object.assign({
      email: "tt@demo.com",
      password: "strawberries",
    });
    this.props.signin(user).then(this.props.closeModal);
  }

  update(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  checkEmail(email) {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) ? true : false;
  }

  checkPassword(pw) {
    return (pw.length >= 6) ? true : false;
  }

  _next() {
    let currentStep = this.state.currentStep;
    const { setErrors } = this.props;
    if (this.state.count !== 1) {
      currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    }

    if (!this.checkEmail(this.state.email)) {
      currentStep = 1;
      setErrors(["Enter a valid email address."]);
    } 

    if (currentStep === 2) {
      setErrors([])
      this.state.count++;
      if (!this.checkPassword(this.state.password) && this.state.count > 1) {
        this.state.count--;
        currentStep = 2;
        setErrors(["Please lengthen password to 6 characters or more"]);
      }
    }

    this.setState({ currentStep: currentStep });
  }

  _prev() {
    this.props.setErrors([]);
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({ currentStep: currentStep });
    this.state.count--;
  }

  render() {
    const { formType, lastStep, errors } = this.props;
    const currentStep = this.state.currentStep;

    const signupGreeting = (currentStep == 2 && formType === "signup") ? (
      <div className="sign-up-greeting">Create your WaveTape account</div>
    ) : null;
    
    const providerButtons = (currentStep === 1) ? (
      <div className="session-form-providers">
        <a className="demo-user" onClick={this.handleDemo}>Demo User</a>
        <a className="connect-github" href="https://github.com/tt954/wavetape" target="_blank">Continue to Github</a>
        <a className="connect-openFridge" href="https://open--fridge.herokuapp.com/" target="_blank">Continue to openFridge</a>
        <div className="auth-separator"><span>or</span></div>
      </div>
    ) : null;

    const signupTerms = (currentStep == 2 && formType === "signup") ? (
      <div className="signup-terms">By signing up I hereby agree to go <span>drink a glass of water</span>.</div>
    ) : null;

    const step1Footer = (currentStep === 1) ? (
      <div className="step1-footer">
        <div className="need-help-wrapper">
          <a href="https://tt954.github.io/" target="_blank" className="need-help">Visit me</a>
        </div>
        <div className="step1-footer-content">
          <p>This project was created for learning purposes. No infringement of copyright is intended. I do not own any music used in the demo of this site. Credits to the original owners.</p>
          <p>This site might look familiar to you because it is a clone of the music sharing platform <a href="https://soundcloud.com/" target="_blank">SoundCloud</a>.</p>
        </div>
      </div>
    ) : null;

    const buttonText = (currentStep === 2 && this.props.formType === "signup") ? "Accept & Continue" : "Continue";
    const nextButton = (currentStep < this.props.lastStep) ? (
      <button className="session-form-next" type="button" onClick={this._next}>{buttonText}</button>
    ) : null;

    const prevButton = (currentStep === 2) ? (
      <button type="button" className="session-form-back" onClick={this._prev}>◀︎</button>
    ) : null;

    const submitButton = (this.state.currentStep === lastStep) ? (
      <button className="session-form-next" type="submit">{(formType === "signin") ? "Sign in" : "Get started" }</button>
    ) : null;

    return (
      <form className="session-form" onSubmit={this.handleSubmit}>
          {providerButtons}
          {signupGreeting}
        
          <div className="session-form-connect">
            <div className="session-form-input">
            <Step1
              currentStep={this.state.currentStep}
              update={this.update}
              email={this.state.email}
              prevButton={prevButton}
            />
            <Step2
              currentStep={this.state.currentStep}
              update={this.update}
              password={this.state.password}
              formType={formType}
            />
            <Step3
              currentStep={this.state.currentStep}
              update={this.update}
              password={this.state.password}
              formType={formType}
            />
            </div>

            <div className="session-form-errors">
              <p>{errors}</p>
            </div>

            {signupTerms}
            {nextButton}
            {submitButton}
            {step1Footer}
          </div>
        </form>
    );
  }
}

export default SessionForm;