import React from 'react';
import beerBanner from '../assets/img/drews-brews-banner.jpeg';
import dbIcon from '../assets/img/dbicon.jpg';

function Header() {
  return(
    <div>
      <div style={navStyles}>
        <img style={ImageStyles} src={dbIcon}></img>
        <p></p>
        <a style={centerStyling}>Beers on Tap</a>
        <a style={centerStyling}>Add a Keg</a>
      </div>

      <hr/>
      <div className='container-fluid'>
        <div  style={HeaderStyles}>
          <h1 style={centerStyling}><strong>Drew's</strong> <em>Brews</em></h1>
        </div>
      </div>
      <hr/>
    </div>);
}

var HeaderStyles = {
  textAlign: 'center',
  padding: '50',
  color: 'white',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  backgroundImage: `url(${beerBanner})`,
  backgroundSize: 'cover',
  backgroundPosition: '50% 25%',
  marginTop: '0',
}

var navStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr 2fr 1fr 1fr',
  textAlign: 'center',
  marginTop: 'auto',
  marginBottom: 'auto',
  fontSize: '2rem'

}

var centerStyling = {
  marginTop: 'auto',
  marginBottom: 'auto',
}

var ImageStyles = {
  height: '120px',
  width: '120px',
  padding: '0',
  margin: '0'
}
export default Header;
