import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    const { currentUser, openModal } = this.props;

    return (
      <div className="nav-bar">
        <button>
          <Link className="nav-bar-logo" to="/discover">Image of Logo</Link> 
        </button>

        <button>
          <Link to="/discover">Home</Link> 
        </button>

        <button>
          <Link to="/stream">Stream</Link> 
        </button>

        <button>
          <Link to="/library">Library</Link> 
        </button>

        <input
          type="search" />

        <button>
          <Link to="/upgrade">Upgrade</Link>
        </button>

        <button onClick={() => openModal('login')}>Sign in</button>
        <button onClick={() => openModal('signup')}>Create account</button>

        
      </div>
    )
  }
}

export default NavBar;