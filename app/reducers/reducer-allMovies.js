import _ from 'underscore';

const allMoviesReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_FAVS':
      let initialFavs = _.uniq(action.data.data, (movie) => {
        return movie.title;
      })
      initialFavs.map((movie) => {
        movie.id = movie.movie_id;
      })
      return initialFavs;
    case 'ADD_FAV':
      let status = true;
      state.forEach((movie) => {
        if(movie.id === action.movie.id){
          status = false;
        }
      })
      return status ? [...state, action.movie] : state;
    case 'DELETE_FAV':
      return state.filter((movie) => {
        if(movie.id !== action.movie.id){
          return movie;
        }
      })
  }
  return state;
}

export default allMoviesReducer;
