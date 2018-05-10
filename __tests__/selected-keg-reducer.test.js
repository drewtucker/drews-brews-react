import selectedKegReducer from '../src/reducers/selected-keg-reducer';

describe('selectedKegReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(selectedKegReducer( {}, { type: null })).toEqual({});
  });

  test('Should record which keg has been selected by user', () => {
    expect(selectedKegReducer( {}, { type: 'SELECT_KEG', kegId: 1 })).toEqual(1);
  });
});
