import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <button>
          <NavLink className="nav-bar-logo" to="/discover">Image of Logo</NavLink> 
        </button>

        <button>
          <NavLink to="/discover">Home</NavLink> 
        </button>

        <button>
          <NavLink to="/stream">Stream</NavLink> 
        </button>

        <button>
          <NavLink to="/library">Library</NavLink> 
        </button>

        <input
          type="search" />

        <button>
          <NavLink to="/upgrade">Upgrade</NavLink>
        </button>
        
      </div>
    )
  }
}

export default NavBar;