import React from 'react';
import { Link } from 'react-router-dom';

import NavBarMenu from './nav_bar_menu';

class NavBar extends React.Component {
  render() {
    const { currentUser, openModal, signout } = this.props;
    const sessionBtns = () => {
      return currentUser ? (
        <>
          <div className="nbl-upgrade">
            <button><Link to="/upgrade">Upgrade</Link></button>
          </div>
        </>
      ) : (
        <>
          <div className="nbl-session">
            <button className="session-btn signin" onClick={() => openModal('login')}>Sign in</button>
            <button className="session-btn signup" onClick={() => openModal('signup')}>Create account</button>
          </div>
        </>
      )
    }

    if (currentUser) { // if logged in
      const userNav = () => (
        <div className="nbr-userNav"> 
          <UserNavMenu
            currentUser={currentUser}/>
        </div>
      )
    }

    return (
      <div className="nav-bar">
        <div className="nav-bar-left">
          <div className="nbl-logo">
            <a href="#/discover"><img src="" alt="logo" /></a>
          </div>
          
            <ul className="nbl-nav-list">
              <li><Link to="/discover">Home</Link></li>
              <li><Link className="not-allowed" to="/discover">Stream</Link></li>
              <li><a className="not-allowed" href="https://github.com/tt954/wavetape" target="_blank">Library</a></li>
            </ul>
          
        </div>
        
        <div className="nav-bar-middle">
          <form className="nav-bar-search">
            <input type="search" />
            <button type="submit">Search</button>
          </form>
        </div>

        <div className="nav-bar-right">
          {sessionBtns()}

          <div className="nbr-upload">
            <button><Link to="/upload">Upload</Link></button>
          </div>

          <div className="nbr nav-bar-menu">
            <NavBarMenu
              currentUser={currentUser}
              signout={signout} />
          </div>
        </div>

        {/* <ProfileDropDown />  */}

      </div>
    )
  }
}

export default NavBar;