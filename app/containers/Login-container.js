import { connect } from 'react-redux';
import { addItem } from '../actions';
import Login from '../components/Login';

const mapStateToProps = (state) => {
  return { newItems: state.newItems }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (username, password) => {
      dispatch(addItem(username, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputSection)
