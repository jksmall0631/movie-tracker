// export const login = (username, password) => {
//   return {
//     type: 'USER_LOGIN',
//     username,
//     password,
//   }
// }

export const addMovies = (movies) => {
  return {
    type: 'ADD_MOVIES',
    movies,
  }
}
