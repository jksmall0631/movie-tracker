import { connect } from 'react-redux';
import { userSignIn } from '../actions';
import UserSignIn from '../components/UserSignIn';

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleUserAPI: (data) => {
      dispatch(userSignIn(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSignIn)
