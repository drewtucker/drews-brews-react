export default (state = {}, action) => {
  switch(action.type) {
    case 'SELECT_KEG':
      return action.kegId;
    default:
      return state;
  }
};
