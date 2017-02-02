export const userSignIn = (data) => {
  return {
    type: 'USER_LOGIN',
    data
  }
}

export const addMovies = (movies) => {
  return {
    type: 'ADD_MOVIES',
    movies,
  }
}
