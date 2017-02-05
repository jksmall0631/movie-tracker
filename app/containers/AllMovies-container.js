import { connect } from 'react-redux';
import { finalFaves } from '../actions';
import AllMovies from '../components/AllMovies';

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFinalFavs: (noDuplicates) => {
      dispatch(finalFaves(noDuplicates))
    },
    setDeleteFavorite: (movie) => {
      dispatch(removeFavorite(movie))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllMovies)
