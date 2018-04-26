import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  console.log(props.currentRouterPath);
  const kegInformation =
    <div>
      <h3><span style={BeerNameStyling}>{props.name}</span> by: {props.brewery}</h3>
      <h5>Alcohol Content: {props.alcoholContent}%</h5>
      <h4>${props.price}</h4>
      <h6>{props.pints} pints remaining</h6>
      <h6>Added {props.formattedTimeAdded} ago</h6>
      <hr/>
    </div>;
    if (props.currentRouterPath === '/admin'){
      return (
        <div onClick={() => {props.onKegSelection(props.kegId);}}>
          {kegInformation}
        </div>
      );
    } else {
      return(
        <div>
          {kegInformation}
        </div>
      );
    }
}


Keg.propTypes = {
  name: PropTypes.string,
  brewery: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  pints: PropTypes.number,
  formattedTimeAdded: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func,
  kegId: PropTypes.string.isRequired
};

Keg.defaultProps = {
  pints: 124
};


// function sellPint(keg){
//   this.pints --;
// };


//STYLING OBJECTS

var BeerNameStyling = {
  color: 'tomato'
};

export default Keg;
