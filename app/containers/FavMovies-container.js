import { connect } from 'react-redux';
import { addMovies, finalFaves } from '../actions';
import FavMovies from '../components/FavMovies';

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFav: (movie) => {
      dispatch(deleteFav(movie))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavMovies)
