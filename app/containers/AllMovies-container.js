import { connect } from 'react-redux';
import { addFav } from '../actions';
import AllMovies from '../components/AllMovies';

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (movie, dbFavs) => {
      dispatch(addFav(movie, dbFavs))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllMovies)
