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
  return {
    type: 'TOGGLE_FAVS',
    favs: false,
  }
}

export const addFav = (movie, dbFavs) => {
  return {
    type: 'ADD_FAV',
    movie,
    dbFavs,
  }
}

export const deleteFav = (movie) => {
  return {
    type: 'DELETE_FAV',
    movie,
  }
}

export const finalFaves = (finalist) => {
  return {
    type: 'FINAL_FAVS',
    finalFaves: finalist,
  }
}
