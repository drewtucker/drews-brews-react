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
          {Object.keys(props.kegList).map(function(kegId){
            var keg = props.kegList[kegId];
            return <Keg
            name={keg.name}
            brewery={keg.brewery}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            pints={keg.pints}
            formattedTimeAdded={keg.formattedTimeAdded}
            currentRouterPath={props.currentRouterPath}
            key={kegId}
            kegId={kegId}
            onKegSelection={props.onKegSelection}/>
        })}
      </Panel>
        </div>
      </div>
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func
};


//STYLING

var ListStyling = {
  textAlign: 'center'
};


export default KegList;
