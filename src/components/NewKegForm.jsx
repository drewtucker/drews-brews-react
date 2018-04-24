import React from 'react';
import { Panel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewKegForm(props) {
  let _name = null;
  let _brewery = null;
  let _alcoholContent = null;
  let _price = null;

  function handleNewKegFormSubmission(event){
    event.preventDefault();
    props.onNewKegCreation({name: _name.value, brewery: _brewery.value, alcoholContent: _alcoholContent.value, price: _price.value, id: v4()});
    _name.value = '';
    _brewery.value = '';
    _alcoholContent.value = '';
    _price.value = '';
  }

  return(

    <div>
      <div className='container'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>

          <Panel style={PanelStyles}>
            <h3>New Keg Details:</h3>
            <form onSubmit={handleNewKegFormSubmission}>
              <input
                type='text'
                id='name'
                placeholder='Beer Name'
                ref={(input) => {_name = input;}}/>
              <br/>
              <input
                type='text'
                id='brewery'
                placeholder='Brewery'
                ref={(input) => {_brewery = input;}}/>
              <br/>
              <input
                type='text'
                id='alcoholContent'
                placeholder='Alcohol Content (%)'
                ref={(input) => {_alcoholContent = input;}}/>
              <br/>
              <input
                type='text'
                id='price'
                placeholder='Price'
                ref={(input) => {_price = input;}}/>
              <hr/>
              <button type='submit'>Add!</button>
            </form>
          </Panel>
        </div>
      </div>
    </div>
  );
}

var PanelStyles = {
  textAlign: 'center',

}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};


export default NewKegForm;
