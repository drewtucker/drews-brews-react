import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
  return(
    <div>
      <div className='container-fluid'>
        <div className='footer' style={FooterStyles}>
          <h6>Created by Drew Tucker 2018</h6>
          <Link to='/contact'>Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

var FooterStyles = {
  textAlign: 'center',
  color: 'white',
};

export default Footer;
