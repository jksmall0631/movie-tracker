const movieIndexReducer = (state = [], action) => {
  switch(action.type){
    case 'NEW_FAV':
      return [...state, {action}];
  }
  return state;
}

export default movieIndexReducer;
