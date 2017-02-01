import { connect } from 'react-redux';
import { addMovies } from '../actions';
import MovieIndex from '../components/MovieIndex';

const mapStateToProps = ({appReducer}) => {
  console.log(appReducer);
  return {}
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleAPI: (movies) => {
//       dispatch(addMovies(movies))
//     }
//   }
// }

export default connect(mapStateToProps)(MovieIndex)
