import _ from 'underscore';


const filterFavorites = (dbFavs, newFavs) => {
  // let addFil = newFavs.filter((stuff) => {
  //   return stuff.add
  // })
  // let delFil = newFavs.filter((stuff) => {
  //   return stuff.del
  // })
  // let added = addFil.map((stuff) => {
  //   return stuff.add
  // })
  // let deleted = delFil.map((stuff) => {
  //   return stuff.del
  // })

  let finalFinalFaves = _.uniq(dbFavs, (movie) => {
    return movie.title;
  })
  // let finalFinalFaves;

  // if(newFavs.length === 0){
  //   return noDuplicates = _.uniq(dbFavs, (movie) => {
  //     return movie.title;
  //   });
  // }
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
  console.log(finalFinalFaves);
  return finalFinalFaves;
  // this.props.setFinalFavs(noDuplicates);
  // this.props.switchToFavs();
}

export default filterFavorites;
