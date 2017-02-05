import { connect } from 'react-redux';
import { addMovies, toggleFavs, falseFavs } from '../actions';
import App from '../components/App';

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAPI: (movies) => {
      dispatch(addMovies(movies))
    },
    switchToFavs: () => {
      dispatch(toggleFavs())
    },
    back: () => {
      dispatch(falseFavs())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
