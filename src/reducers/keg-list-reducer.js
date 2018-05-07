export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_KEG':
      const { name, brewery, price, alcoholContent, id } = action;
      let newState = Object.assign({}, state, {
        [id]: {
          name: name,
          brewery: brewery,
          price: price,
          alcoholContent: alcoholContent,
          id: id
        }
      });
      return newState;
    default:
      return state;
  }
};
