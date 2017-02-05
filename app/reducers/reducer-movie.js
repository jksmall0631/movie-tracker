const movieReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_MOVIES':
      return Object.assign({}, state, {movies: action.movies})
    case 'FINAL_FAVS':
      return Object.assign({}, state, {final: action})
  }
  return state;
}

export default movieReducer;
