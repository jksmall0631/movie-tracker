import { connect } from 'react-redux';
import { addMovies } from '../actions';
import FavMovies from '../components/FavMovies';

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(FavMovies)
