import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  return(
    <div>
      <hr/>
      <h2>{props.selectedKeg.name} by {props.selectedKeg.brewery}</h2>
      <h2>${props.selectedKeg.price}</h2>
      <h3>Alcohol Content: {props.selectedKeg.alcoholContent}%</h3>
      <h3>Added {props.selectedKeg.formattedTimeAdded} ago</h3>
    </div>
  );

}

KegDetail.propTypes = {
  selectedKeg: PropTypes.object
};

export default KegDetail;
