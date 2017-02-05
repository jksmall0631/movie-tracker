import { connect } from 'react-redux';
import { addMovies, finalFaves, toggleFavs } from '../actions';
import App from '../components/App';

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAPI: (movies) => {
      dispatch(addMovies(movies))
    },
    setFinalFavs: (noDuplicates) => {
      dispatch(finalFaves(noDuplicates))
    },
    switchToFavs: () => {
      dispatch(toggleFavs())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
