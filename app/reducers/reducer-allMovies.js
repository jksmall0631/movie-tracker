const allMoviesReducer = (state = [], action) => {
  switch(action.type){
    case 'FINAL_FAVS':
      return action;
  }
  return state;
}

export default allMoviesReducer;
