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
        <a className="connect-google not-allowed">Continue with Google</a>
        <a className="connect-apple not-allowed">Continue with Apple</a>
        <div className="auth-separator"><span>or</span></div>
      </div>
    ) : null;

    const signupTerms = (currentStep == 2 && formType === "signup") ? (
      <div className="signup-terms">By signing up I accept the <a>Terms of Use</a>. I have read and understood the <a>Privacy Policy</a> and <a>Cookies Policy</a>.</div>
    ) : null;

    const step1Footer = (currentStep === 1) ? (
      <div className="step1-footer">
        <div className="need-help-wrapper">
          <a className="need-help not-allowed">Need help?</a>
        </div>
        <div className="step1-footer-content">
          <p>We may use your email and devices for updates and tips on WaveTape's products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings.</p>
          <p>We may use information you provide us in order to show you targeted ads as described in our <a className="not-allowed">Privacy Policy</a>.</p>
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
            />
            {/* {prevButton} need to figure out styling */} 
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