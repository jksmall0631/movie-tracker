const movieIndexReducer = (state = [], action) => {
  switch(action.type){
    case 'NEW_FAV':
      return {new:action.newFav}
    case 'DELETE_FAV':
      return {del:action.delFav}
  }
  return state;
}

export default movieIndexReducer;
