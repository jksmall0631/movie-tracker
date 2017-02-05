import _ from 'underscore';


const filterFavorites = (dbFavs, newFavs) => {
  let addFil = newFavs.filter((stuff) => {
    return stuff.add
  })
  let delFil = newFavs.filter((stuff) => {
    return stuff.del
  })
  let added = addFil.map((stuff) => {
    return stuff.add
  })
  let deleted = delFil.map((stuff) => {
    return stuff.del
  })
  let finalFaves = (dbFavs).concat(added) || []
  let noDuplicates = _.uniq(finalFaves, (movie) => {
    return movie.title;
  });
  let finalFinalFaves;
  deleted.forEach((item) => {
    finalFinalFaves = noDuplicates.filter((fav) => {
      return fav.title !== item.title
    })
  })
  console.log(finalFinalFaves);
  return noDuplicates;
  // this.props.setFinalFavs(noDuplicates);
  // this.props.switchToFavs();
}

export default filterFavorites;
