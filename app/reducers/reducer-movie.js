const movieReducer = (state = {}, action) => {
  switch(action.type){
    case 'ADD_MOVIES':
      return Object.assign({}, state, {movies: action.movies})
  }
  return state;
}

export default movieReducer;
