import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    const { currentUser, openModal, signout } = this.props;
    const sessionBtns = () => {
      return currentUser ? (
        <>
          <button><Link to="/upgrade">Upgrade</Link></button>
          <button><Link to="/upload">Upload</Link></button>
        </>
      ) : (
        <>
          <button className="session-btn signin" onClick={() => openModal('login')}>Sign in</button>
          <button className="session-btn signup" onClick={() => openModal('signup')}>Create account</button>
          <button onClick={() => openModal('signup')}>Upload</button>
        </>
      )
    }
    const signoutBtn = () => currentUser ? <button onClick={signout}>Sign out</button> : null

    return (
      <div className="nav-bar">
        <button className="nb-left btn"><Link to="/discover">Image of Logo</Link></button>
        <button className="nb-left btn"><Link to="/discover">Home</Link></button>
        <button className="nb-left btn"><Link className="not-allowed" to="/discover">Stream</Link></button>
        <button className="nb-left btn"><a className="not-allowed" href="https://github.com/tt954/wavetape" target="_blank">Library</a></button>
        
        <form className="nav-bar-search">
          <input type="search" />
        </form>

        {sessionBtns()}

        {/* <ProfileDropDown />  */}

        {signoutBtn()}
      </div>
    )
  }
}

export default NavBar;