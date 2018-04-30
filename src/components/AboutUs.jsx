import React from 'react';


function AboutUs() {
  return(
    <div>
      <div className='col-md-3'></div>
      <div className='col-md-6'>
        <div style={panelStyles}>

        <h3><em>About Us</em></h3>
        <hr style={HRstyles}/>
        <p>Drew's Brews was founded in 1893 by Drewseph Tuckworth. Since then, we've been committed to providing delicious libations for whatever Ale's ya. </p>
      </div>
      </div>
    </div>
  );
}

var panelStyles = {
  color: 'white',
  backgroundColor: '#272626',
  padding: '10px',
  borderRadius: '10px',
  boxShadow: '0px 0px 10px 2px #272626'
}

var HRstyles = {
  width: '40px'
}

export default AboutUs;
