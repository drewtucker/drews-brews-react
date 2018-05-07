import kegListReducer from '../src/reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action;
  const sampleKegData = {
    name: 'testy brew',
    brewery: 'testy brewery',
    price: '20',
    alcoholContent: '10',
    id: 0,

  }

  test('Should return default state if no action type is recognized', () => {
    expect(kegListReducer({}, { type: null })).toEqual( {} );
  });

  test('Should successfully add a new Keg to masterKegList', () => {
    const { name, brewery, price, alcoholContent, id} = sampleKegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brewery: brewery,
      price: price,
      alcoholContent: alcoholContent,
      id: id
    };
    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brewery: brewery,
        price: price,
        alcoholContent: alcoholContent,
        id: id
      }
    });
  });

});
