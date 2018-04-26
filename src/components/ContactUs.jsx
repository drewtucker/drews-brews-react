import React from 'react';
import { Link } from 'react-router-dom';
import { Panel } from 'react-bootstrap';

function ContactUs() {
  return(
    <div>

      <div className="col-md-3"></div>
      <div className="col-md-7">
      <Panel style={ContactStyles}>
        <h3>Contact Drew Tucker at dtuck43@gmail.com with any concerns.</h3>
        <Link to='/'>Home</Link>
      </Panel>
    </div>
    </div>
  );
}

var ContactStyles = {
  textAlign: 'center',
};

export default ContactUs;
