import _ from 'underscore';


const filterFavorites = (dbFavs, newFavs) => {

  let finalFinalFaves = _.uniq(dbFavs, (movie) => {
    return movie.title;
  })

  if('new' in newFavs){
    let finalFaves = (dbFavs).concat(newFavs.new) || []
    finalFinalFaves = _.uniq(finalFaves, (movie) => {
      return movie.title;
    });
  }

  if('del' in newFavs){
    finalFinalFaves = finalFinalFaves.filter((fav) => {
      return fav.title !== newFavs.del.title
    })
  }
  return finalFinalFaves;
}

export default filterFavorites;
