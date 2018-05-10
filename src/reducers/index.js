import selectedKegReducer from './selected-keg-reducer';
import kegListReducer from './keg-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  selectedKeg: selectedKegReducer,
  masterKegList: kegListReducer
});

export default rootReducer;
