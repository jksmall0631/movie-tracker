import { connect } from 'react-redux';
import { userSignIn } from '../actions';
import UserSignIn from '../components/UserSignIn';
import App from '../components/App';


const mapStateToProps = (state) => {
  console.log(state)
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleUserAPI: (data) => {
      dispatch(userSignIn(data))
      return data;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSignIn)
