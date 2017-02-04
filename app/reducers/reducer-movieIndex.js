const movieIndexReducer = (state = [], action) => {
  switch(action.type){
    case 'TOGGLE_FAVS':
      return action
  }
  return state;
}

export default movieIndexReducer;
