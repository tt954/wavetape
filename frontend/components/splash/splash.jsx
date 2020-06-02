import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
 render() {
   const { openModal } = this.props;
   return (
     <div className="splash-main">
      <section className="splash-top">
        <div className="splash-top-right">
          <button className="session signin" onClick={() => openModal('login')}>Sign in</button>
          <button className="session signup" onClick={() => openModal('signup')}>Create account</button>
          <Link className="not-allowed">For Creators</Link>
        </div>
      </section>
      
      <section className="splash-music">

      </section>
     </div>
   )
 }
}

export default Splash;