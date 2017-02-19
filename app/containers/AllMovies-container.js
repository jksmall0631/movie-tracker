import { connect } from 'react-redux';
import { finalFaves } from '../actions';
import AllMovies from '../components/AllMovies';

const mapStateToProps = (state) => {
  return state
}


export default connect(mapStateToProps)(AllMovies)
