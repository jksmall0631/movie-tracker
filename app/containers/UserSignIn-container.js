import { connect } from 'react-redux';
import { userSignIn, favorites } from '../actions';
import UserSignIn from '../components/UserSignIn';
import App from '../components/App';

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return ({
    handleUserAPI: (data) => {
      dispatch(userSignIn(data))
    },
    handleFavorites: (data) => {
      dispatch(favorites(data))
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSignIn, App)
