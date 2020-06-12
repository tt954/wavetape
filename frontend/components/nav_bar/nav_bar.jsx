import React from 'react';
import { Link } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';
import Dropdown from './dropdown';

class NavBar extends React.Component {
  render() {
    const { currentUser, openModal, signout } = this.props;

    const logoLink = currentUser ? 
      (<Link to="/discover"><p></p></Link>) :
      (<Link to="/"><p></p></Link>)

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
              signout={signout}
              profile={true}/>

            <Dropdown
              currentUser={currentUser}
              signout={signout}
              menu={true} />
          </div>

        </div>
      </header>
    )
  }
}

export default NavBar;