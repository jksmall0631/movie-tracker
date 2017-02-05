const allMoviesReducer = (state = [], action) => {
  switch(action.type){
    case 'FINAL_FAVS':
      return action;
    case 'REMOVE_FAV':
     return[...state, {action}]
  }
  return state;
}

export default allMoviesReducer;
