import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
 render() {
   const { openModal } = this.props;
   return (
     <>
      <section className="splash-top">
        <button className="btn signin" onClick={() => openModal('login')}>Sign in</button>
        <button className="btn signup" onClick={() => openModal('signup')}>Create account</button>
      </section>
     </>
   )
 }
}

export default Splash;