const appReducer = (state = [], action) => {
  console.log(action);
  switch(action.type){
    case 'ADD_MOVIES':
      return [...state, { movies: action.movies }]
  }
  return state;
}

export default appReducer;
