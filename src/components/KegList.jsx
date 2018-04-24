import React from 'react';
import Keg from './Keg';
import { Panel } from 'react-bootstrap';
import PropTypes from 'prop-types';

function KegList(props) {
  return(
    <div>
      <div className='container'>
        <div className='col-md-6'>
          <Panel style={ListStyling}>
          <h2>Beers on Tap:</h2>
          <hr/>
          {props.kegList.map((keg, index) =>
          <Keg
            name={keg.name}
            brewery={keg.brewery}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            pints={keg.pints}
            key={keg.id}/>
        )}
      </Panel>
        </div>
      </div>
    </div>
  );
}

//STYLING AND MOCK DATA BELOW

var ListStyling = {
  textAlign: 'center'
}

KegList.propTypes = {
  kegList: PropTypes.array
};


export default KegList;
