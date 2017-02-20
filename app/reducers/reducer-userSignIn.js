const userSignInReducer = (state =[], action) => {
  switch(action.type){
    case 'USER_LOGIN':
    return Object.assign({}, state, {user: action})
  }
  // switch(action.type){
  //   case 'ADD_FAVS':
  //   return Object.assign({}, state, {fav: action})
  // }
  return state
}

export default userSignInReducer;
