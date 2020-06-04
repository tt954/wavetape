import React from "react";

class NavBarMenu extends React.Component {
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
    const { currentUser, signout } = this.props;
    const signoutBtn = () => (currentUser) ? <a href="" onClick={() => signout()}>Sign out</a> : null;

    return (
      <div className="nav-bar-menu-container">
        <button className="nav-bar-menu-btn" onClick={this.clicker}>
        </button> 
        <ul className={`nav-bar-menu-dropdown ${(this.state.drop) ? "revealed" : "hidden"}`}>
          <li>About us</li>
          <li>Legal right</li>
          <li>Copyright</li>

          <li>Mobile apps</li>
          <li>For creators</li>
          <li>Blog</li>
          <li>Jobs</li>
          <li>Developers</li>

          <li>{signoutBtn()}</li>
        </ul>
      </div>
    );
  }
}

export default NavBarMenu;