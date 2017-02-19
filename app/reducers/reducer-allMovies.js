const allMoviesReducer = (state = [], action) => {
  switch(action.type){
    case 'FINAL_FAVS':
      return [...state, action]
  }
  return state;
}

export default allMoviesReducer;
