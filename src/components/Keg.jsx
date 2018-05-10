import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Keg(props) {
  function handleSavingSelectedKeg(kegId) {
    const { dispatch } = props;
    const action = {
      type: 'SELECT_KEG',
      kegId: kegId
    };
    dispatch(action);
  }
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
        <div onClick={() => {handleSavingSelectedKeg(props.kegId);}}>
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

export default connect()(Keg);
