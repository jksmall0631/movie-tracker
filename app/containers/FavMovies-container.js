import { connect } from 'react-redux';
import { addMovies, finalFaves } from '../actions';
import FavMovies from '../components/FavMovies';

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(FavMovies)
