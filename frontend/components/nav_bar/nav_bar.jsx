import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';
import Dropdown from './dropdown';

const NavBar = props => {
  const { currentUser, openModal, signout } = props;
  let history = useHistory();

  const logoLink = currentUser ? 
    (<Link className="nbl-logo-link" to="/discover">
      <img className="discover-logo" src="assets/wt-icon-white.png" alt="wt-logo"/>
    </Link>) :
    (<Link className="nbl-logo-link" to="/">
      <img className="discover-logo" src="assets/wt-icon-white.png" alt="wt-logo" />
      <p>WAVETAPE</p>
    </Link>)

  const sessionButtons = () => {
    return currentUser ? (
      <button className="nbr-upgrade not-allowed">Upgrade</button>
    ) : (
      <div className="nbl-session">
        <button className="session-btn signin" onClick={() => openModal('login')}>Sign in</button>
        <button className="session-btn signup" onClick={() => openModal('signup')}>Create account</button>
      </div>
    )
  }

  const signOut = () => {
    debugger
    signout();
    history.push("/");
  }

  return (
    <header className="banner">
      <div className="nav-bar">
        <div className="nav-bar-left">
          <div className={`nbl-logo ${currentUser ? "half" : "full"}`}>
            {logoLink}
          </div>
          
            <ul className="nbl-nav-list">
              <li><Link to="/discover">Home</Link></li>
              <li><a className="not-allowed">Stream</a></li>
              <li><a className="not-allowed">Library</a></li>
            </ul>
          
        </div>
        
        <div className="nav-bar-middle">
          <form className="nav-bar-search">
            <input type="search" placeholder="Search"/>
            <button type="submit"><FaSearch size={15}/></button>
          </form>
        </div>

        <div className="nav-bar-right">
          {sessionButtons()}

          <button className="nbr-upload"><Link to="/upload">Upload</Link></button>
          
          <Dropdown 
            currentUser={currentUser}
            signout={signOut}
            profile={true}/>

          <Dropdown
            currentUser={currentUser}
            signout={signOut}
            menu={true} />
        </div>

      </div>
    </header>
  )
  
}

export default NavBar;