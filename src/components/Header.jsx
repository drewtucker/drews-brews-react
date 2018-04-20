import React from 'react';

function Header() {
  return(
    <div>
      <div className='container'>
        <div className='jumbotron' style={HeaderStyles}>
          <h1>Drew's Brews</h1>
        </div>
      </div>
    </div>);
}

var HeaderStyles = {
  textAlign: 'center',
  padding: '0',
  color: 'tomato',
  width: '300px'
}

export default Header;
