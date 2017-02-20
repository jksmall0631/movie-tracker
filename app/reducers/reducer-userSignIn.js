const userSignInReducer = (state ={}, action) => {
  switch(action.type){
    case 'USER_LOGIN':
    return Object.assign({}, state, {user: action})
  }
  return state
}

export default userSignInReducer;
