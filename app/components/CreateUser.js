import React, {Component} from 'react';

export default class CreateUser extends Component {
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
        <h2>Not a user? Make an account</h2>
        <input
          placeholder='Name'
          value={this.state.username}
          onChange={() => console.log('hi')} />
        <input
          placeholder='Email'
          value={this.state.username}
          onChange={() => console.log('hi')} />
        <input
          placeholder='Password'
          value={this.state.password}
          onChange={() => console.log('hi')} />
        <button>Sign Up</button>
      </section>
    )
  }
}
