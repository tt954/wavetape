import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
 render() {
   const { openModal } = this.props;
   return (
     <div className="splash-main">
      <section className="splash-top">
        <div className="splash-top-session">
          <button className="session-btn signin" onClick={() => openModal('login')}>Sign in</button>
          <button className="session-btn signup" onClick={() => openModal('signup')}>Create account</button>
          <Link className="not-allowed">For Creators</Link>
        </div>

        <div className="splash-top-main">
          <div className="st-main-carousel">
            <h2>Discover more with WaveTape Go+</h2>
            <p>WaveTape Go+ lets you listen offline, ad-free, with over 150 million tracks — and growing.</p>
          </div>
        </div>
      </section>

      <section className="splash-music">
      </section>

      <section className="splash-devices">
        <img className="devices-mockup" src="assets/devices-mockup.jpg" alt="devices-mockup"/>
      </section>

      <section className="splash-creative">
        <div className="splash-creative-content">
          <p className="test">Calling all creators</p>
          <p>Get on SoundCloud to connect with fans, share your sounds, and grow your audience. What are you waiting for?</p>
        </div>
      </section>

      <section className="splash-bottom">
      </section>
     </div>
   )
 }
}

export default Splash;

// 830px height