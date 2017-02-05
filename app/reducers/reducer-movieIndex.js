const movieIndexReducer = (state = [], action) => {
  switch(action.type){
    case 'TOGGLE_FAVS':
      return Object.assign({}, state, {toggle: action})
    case 'NEW_FAV':
      return [...state, {action}];
  }
  return state;
}

export default movieIndexReducer;
