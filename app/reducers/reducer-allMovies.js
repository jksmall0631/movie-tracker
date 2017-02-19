const allMoviesReducer = (state = [], action) => {
  switch(action.type){
    case 'FINAL_FAVS':
      return [...state, action]
    case 'ADD_FAV':
      let status = true;
      state.forEach((movie) => {
        if(movie.movie.id === action.movie.id){
          status = false;
        }
      })
      return status ? [...state, action] : state;
    case 'DELETE_FAV':
      return state.filter((movie) => {
        if(movie.movie.id !== action.movie.id){
          return movie;
        }
      })
  }
  return state;
}

export default allMoviesReducer;
