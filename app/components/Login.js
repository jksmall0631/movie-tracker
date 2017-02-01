import React, {Component} from 'react';
import UserSignIn from './UserSignIn';
import CreateUser from './CreateUser';


const Login = () => {

  return(
    <section>
      <UserSignIn />
      <CreateUser />  
    </section>
  )

}

export default Login;

// onClick={() => this.props.handleClick(this.state.username, this.state.password)}
