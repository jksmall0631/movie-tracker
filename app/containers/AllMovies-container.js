import { connect } from 'react-redux';
import { addMovies } from '../actions';
import AllMovies from '../components/AllMovies';

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(AllMovies)
