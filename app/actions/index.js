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

export const falseFavs = () => {
  console.log('bla')
  return {
    type: 'TOGGLE_FAVS',
    favs: false,
  }
}

export const newFavorite = (movie) => {
  return {
    type: 'NEW_FAV',
    newFav: movie,
  }
}

export const deleteFavorite = (movie) => {
  return {
    type: 'DELETE_FAV',
    delFav: movie,
  }
}

export const finalFaves = (noDuplicates) => {
  return {
    type: 'FINAL_FAVS',
    finalFaves: noDuplicates,
  }
}
