import React, {Component} from 'react';

export default class UserSignIn extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
    }
  }

  render(){
    return(
      <section>
        <h2>Already a user? Sign In</h2>
        <input
          placeholder='Username'
          value={this.state.username}
          onChange={() => console.log('hi')} />
        <input
          placeholder='Password'
          value={this.state.password}
          onChange={() => console.log('hi')} />
        <button>Sign In</button>
      </section>
    )
  }
}
