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

export const favorites = (data) => {
  return {
    type: 'ADD_FAVS',
    data,
  }
}

export const toggleFavs = () => {
  return {
    type: 'TOGGLE_FAVS',
    favs: true,
  }
}
