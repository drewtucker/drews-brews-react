export default (state = {}, action) => {

  let newState;
  const { name, brewery, alcoholContent, price, timeAdded, id, formattedTimeAdded } = action;

  switch (action.type) {
    case 'ADD_KEG':
      newState = Object.assign({}, state, {
        [id]: {
          name: name,
          brewery: brewery,
          price: price,
          alcoholContent: alcoholContent,
          timeAdded: timeAdded,
          id: id,
          formattedTimeAdded: formattedTimeAdded
        }
      });
      return newState;

    case 'UPDATE_TIME':
      const newKeg = Object.assign({}, state[id], {formattedTimeAdded});
      newState = Object.assign({}, state, {
        [id]: newKeg
      });
      return newState;

    default:
      return state;
  }
};
