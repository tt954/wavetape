import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  update(property) {
    return (e) => this.setState({
      [property]: e.currentTarget.value
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) =>
          <li key={`error-${i}`}>{error}</li>
        )}
      </ul>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState({
      username: "",
      password: "",
    })
  }

  render() {
    const navLink = 
      this.props.formType === "Log In" ? 
      <Link to="/signup">Sign Up</Link> :
      <Link to="/login">Log In</Link>

    return(
      <form onSubmit={this.handleSubmit}>
        <h3>{this.props.formType}</h3>
        <br/> {navLink}

        {this.renderErrors()}

        <label> Username:
          <input 
            type="text"
            value={this.state.username}
            onChange={this.update("username")}/>
        </label>
        <br/>

        <label> Password:
          <input 
            type="password"
            value={this.state.password}
            onChange={this.update("password")}/>
        </label>
        <br/>

        <button>{this.props.formType}</button>
      </form>
    )
  }
}

export default SessionForm;