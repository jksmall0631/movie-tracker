const movieIndexReducer = (state = [], action) => {
  switch(action.type){
    case 'NEW_FAV':
      return {fav:action};
    case 'DELETE_FAV':
      return {del:action};
    case 'FINAL_FAVS':
      return {final:action};
  }
  return state;
}

export default movieIndexReducer;
