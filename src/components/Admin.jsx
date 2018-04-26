import React from 'react';
import KegList from './KegList';
import KegDetail from './KegDetail';
import PropTypes from 'prop-types';

function Admin(props){
  let optionalSelectedKegContent = null;
  if (props.selectedKeg != null){
    optionalSelectedKegContent = <KegDetail selectedKeg={props.kegList[props.selectedKeg]}/>;
  }
  return (
    <div>
      <h2>(Admin)</h2>
      {optionalSelectedKegContent}
      <KegList
        kegList={props.kegList}
        currentRouterPath={props.currentRouterPath}
        onKegSelection={props.onKegSelection}/>
    </div>
  );
}

Admin.propTypes = {
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onKegSelection: PropTypes.func.isRequired,
  selectedKeg: PropTypes.string
};

export default Admin;
