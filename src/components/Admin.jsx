import React from 'react';
import KegList from './KegList';
import KegDetail from './KegDetail';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function Admin(props){
  let optionalSelectedKegContent = null;
  if (props.selectedKeg.length > 0){
    optionalSelectedKegContent = <KegDetail selectedKeg={props.kegList[props.selectedKeg]}/>;
  }
  return (
    <div>
      <h2>(Admin)</h2>
      {optionalSelectedKegContent}
      <KegList
        kegList={props.kegList}
        currentRouterPath={props.currentRouterPath}/>
    </div>
  );
}

Admin.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  selectedKeg: PropTypes.string
};

const mapStateToProps = state => {
  return {
    selectedKeg: state.selectedKeg,
    kegList: state.masterKegList
  };
};

export default connect(mapStateToProps)(Admin);
