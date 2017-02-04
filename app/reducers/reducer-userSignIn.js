const userSignInReducer = (state =[], action) => {
  switch(action.type){
    case 'USER_LOGIN':
    console.log(action)
    return Object.assign({}, state, {user: action})
  }
  switch(action.type){
    case 'ADD_FAVS':
    console.log(action)
    return Object.assign({}, state, {fav: action})
  }

  return state
}

export default userSignInReducer;
