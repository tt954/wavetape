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
    const signoutBtn = () => (currentUser) ? <button onClick={signout}>Sign out</button> : null;

    return (
      <>
        <a className="nav-bar-menu-click" onClick={this.clicker}>...</a>
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
      </>
    );
  }
}

export default NavBarMenu;