import React, {Component} from 'react';

export default class UserSignIn extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
    }
  }

  signIn(username, password){
    console.log('yo')
  }

  render(){
    let {username, password} = this.state
    return(
      <section>
        <h2>Already a user? Sign In</h2>
        <input
          placeholder='Username'
          value={username}
          onChange={(e) => this.setState({ username : e.target.value})} />
        <input
          placeholder='Password'
          value={password}
          onChange={(e) => this.setState({ password : e.target.value})} />
        <button onClick={()=> this.signIn({username, password})}>Sign In</button>
      </section>
    )
  }
}
