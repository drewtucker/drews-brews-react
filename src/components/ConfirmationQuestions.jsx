import React from 'react';
import { Panel } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  return (
    <div>
      <div className='container'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>

      <Panel style={PanelStyles}>
        <p>Did Drew give you permission?</p>
        <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
      </Panel>
    </div>
    </div>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};


var PanelStyles = {
  textAlign: 'center',

}

export default ConfirmationQuestions;
