import React from "react";
import { Link } from 'react-router-dom';

import { BsThreeDots } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { FaBell, FaUserFriends, FaStar, FaGithub, FaUserAlt, FaHeart } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { GiSoundWaves } from 'react-icons/gi';
import { AiTwotoneSwitcher } from 'react-icons/ai';


class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileDrop: false,
      menuDrop: false,
    };
    this.profileOpen = this.profileOpen.bind(this);
    this.menuOpen = this.menuOpen.bind(this);
    this.profileClose = this.profileClose.bind(this);
    this.menuClose = this.menuClose.bind(this);
  }

  profileOpen() {
    this.setState({ profileDrop: true });
  }
  menuOpen() {
    this.setState({ menuDrop: true });
  }

  profileClose() {
    setTimeout(() => this.setState({ profileDrop: false }), 100);
  }
  menuClose() {
    setTimeout(() => this.setState({ menuDrop: false }), 100);
  }

  render() {
    const { currentUser, signout, profile, menu } = this.props;
    const signoutButton = (currentUser) ? (
      <li className="dropdown-signout" onClick={signout}>Sign out</li>
    ) : null;

    const profileDropdown = (currentUser && profile) ? (
      <>
        <div className="nbr-user">
          <button className="profile-dropdown-button" 
            onFocus={this.profileOpen} onBlur={this.profileClose}>
            <span className="profile-pic-dropdown"><img src={currentUser.avatarUrl} alt={currentUser.username}/></span>
            <p>{currentUser.username}</p>
            <span><IoIosArrowDown size={20}/></span>
          </button>
          <ul className={`nb-profile-dropdown ${(this.state.profileDrop) ? "revealed" : "hidden"}`}>
            <li><Link to={`/users/${currentUser.id}`}><span><FaUserAlt size={14} /></span><p>Profile</p></Link></li>
            <li><a href="https://github.com/tt954/wavetape" target="_blank"><span><FaGithub size={14} /></span><p>Github</p></a></li>
            <li className="not-allowed"><a><span><FaHeart size={16} /></span><p>Likes</p></a></li>
            <li className="not-allowed"><a><span><AiTwotoneSwitcher size={16} /></span><p>Playlists</p></a></li>
            <li className="not-allowed"><a><span><FaUserFriends size={16} /></span><p>Following</p></a></li>
            <li className="not-allowed"><a><span><FaStar size={16} /></span><p>Try Pro</p></a></li>
            <li className="not-allowed"><a><span><GiSoundWaves size={18} /></span><p>Tracks</p></a></li>
          </ul>
        </div>
        <button className="nbr-user-btn"><FaBell size={18} /></button>
        <button className="nbr-user-btn"><GrMail size={18} /></button>
      </>
    ) : null;

    const menuDropdown = (menu) ? (
      <div className="nbr-menu">
        <button type="button" className="menu-dropdown-button"
          onFocus={this.menuOpen} onBlur={this.menuClose}>
          <BsThreeDots size={25}/>
        </button>
        <div className={`nb-menu-dropdown ${(this.state.menuDrop) ? "revealed" : "hidden"}`}>
          <ul>
            <li>About us</li>
            <li>Legal right</li>
            <li>Copyright</li>
          </ul>

          <ul>
          <li>Mobile apps</li>
          <li>For creators</li>
          <li>Blog</li>
          <li>Jobs</li>
          <li>Developers</li>
          </ul>

          {signoutButton}
        </div>
      </div>
    ) : null;

    return (
      <>
        {profileDropdown}
        {menuDropdown}
      </>
    );
  }
}

export default Dropdown;