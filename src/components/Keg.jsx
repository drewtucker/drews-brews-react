import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return(
    <div>
      <h3>{props.name} by: {props.brewery}</h3>
      <h5>Alcohol Content: {props.alcoholContent}%</h5>
      <h4>${props.price}.00</h4>
      <h6>{props.pints} pints remaining</h6>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brewery: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.number,
  pints: PropTypes.number = 124
};

export default Keg;
