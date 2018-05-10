import kegListReducer from '../src/reducers/keg-list-reducer';
import Moment from 'moment';

describe('kegListReducer', () => {

  let action;
  const sampleKegData = {
    name: 'testy brew',
    brewery: 'testy brewery',
    price: '20',
    alcoholContent: '10',
    timeAdded: 5000,
    id: 0,
    formattedTimeAdded: 'a few seconds'

  }

  test('Should return default state if no action type is recognized', () => {
    expect(kegListReducer({}, { type: null })).toEqual( {} );
  });

  test('Should successfully add a new Keg to masterKegList', () => {
    const { name, brewery, price, alcoholContent, timeAdded, id} = sampleKegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brewery: brewery,
      price: price,
      alcoholContent: alcoholContent,
      timeAdded: timeAdded,
      id: id,
      formattedTimeAdded: new Moment().fromNow(true)
    };
    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brewery: brewery,
        price: price,
        alcoholContent: alcoholContent,
        timeAdded: timeAdded,
        id: id,
        formattedTimeAdded: 'a few seconds'
      }
    });
  });

  test('Should add freshly-calculated Moment-formatted time added to keg entry', () => {
    const { name, brewery, price, alcoholContent, id, timeAdded} = sampleKegData;
    action = {
      type: 'UPDATE_TIME',
      formattedTimeAdded: '4 minutes',
      id: id
    };
    expect(kegListReducer({ [id] : sampleKegData}, action)).toEqual({
      [id]: {
        name: name,
        brewery: brewery,
        price: price,
        alcoholContent: alcoholContent,
        id: id,
        timeAdded: timeAdded,
        formattedTimeAdded: '4 minutes'
      }
    });
  });

});
