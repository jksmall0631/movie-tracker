import _ from 'underscore';

const filterFavorites = (dbFavs, movie, storeFavs) => {
  let finalFinalFaves;
  let oldFavs;

  if(storeFavs.length > 0){
    oldFavs = (dbFavs).concat(storeFavs?storeFavs.finalFaves:[]);
  }else{
    oldFavs = dbFavs
  }
  if(movie.fav == true){
    oldFavs.push(movie)
    finalFinalFaves = _.uniq(oldFavs, (movie) => {
      return movie.title;
    });
    console.log(finalFinalFaves)
  }

  if(movie.fav == false){
    let finalFilterFavs = _.uniq(oldFavs, (movie) => {
      return movie.title;
    })
    finalFinalFaves = finalFilterFavs.filter((fav) => {
      return fav.title !== movie.title
    })
  }
  console.log(finalFinalFaves);
  return finalFinalFaves;
}

export default filterFavorites;
