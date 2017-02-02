import React, {Component} from 'react';
import UserSignIn from '../containers/UserSignIn-container';
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
