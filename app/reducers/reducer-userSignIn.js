const userSignInReducer = (state =[], action) => {
  switch(action.type){
    case 'USER_LOGIN':
    return action.data
  }
  return state
}

export default userSignInReducer;
