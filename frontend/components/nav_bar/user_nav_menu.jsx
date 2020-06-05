import React from 'react';

class UserNavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drop: false
    };
    this.clicker = this.clicker.bind(this);
  }

  clicker() {
    let drop = this.state.drop;
    if (drop === false) {
      this.setState({ drop: true });
    } else {
      this.setState({ drop: false });
    }
  }

  render() {
    const { currentUser } = this.props;

    return (
      <>
        <a className="" onClick={this.clicker}>{currentUser.username}</a>
      </>
    )
  }
}

export default UserNavMenu;