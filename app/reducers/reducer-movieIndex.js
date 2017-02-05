const movieIndexReducer = (state = [], action) => {
  switch(action.type){
    case 'NEW_FAV':
      let finalState = state.map((thing) => {
        return thing
      })
      return Object.assign([ ...finalState, {add: action.newFav}]);
    case 'DELETE_FAV':
      console.log(action.delFav)
      console.log(state)
      let deleteState = state.map((thing) => {
        return thing
      })
      return Object.assign([ ...deleteState, {del: action.delFav}]);
  }
  return state;
}

export default movieIndexReducer;
