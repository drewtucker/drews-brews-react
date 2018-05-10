import rootReducer from '../src/reducers/index';
import selectedKegReducer from '../src/reducers/selected-keg-reducer';
import kegListReducer from '../src/reducers/keg-list-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  test('Should return default state if no action type is recognized', () => {
      expect(rootReducer( {}, { type: null})).toEqual({
        masterKegList: {},
        selectedKeg: {}
      });
  });

  test('Should contain kegListReducer logic', () => {
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, { type: null }));
  });

  test('Should contain selectedKegReducer logic', () => {
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, { type: null}));
  });

});
