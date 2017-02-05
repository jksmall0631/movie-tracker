import _ from 'underscore';


const filterFavorites = (dbFavs, newFavs) => {
  let added = newFavs.map((stuff) => {
    return stuff.add
  })
  let deleted = newFavs.map((stuff) => {
    return stuff.del
  })
  let finalFaves = (dbFavs).concat(added) || []
  let noDuplicates = _.uniq(finalFaves, (movie) => {
    return movie.title;
  });
  return noDuplicates;
  // this.props.setFinalFavs(noDuplicates);
  // this.props.switchToFavs();
}

export default filterFavorites;
