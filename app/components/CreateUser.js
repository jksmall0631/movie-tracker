import React, {Component} from 'react';
import {Link} from 'react-router';

export default class CreateUser extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  handleCreateUser(name, email, password){
    const server = ('http://localhost:3000/api/users/new')
    fetch(server, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({name: name, email: email, password: password})
    })
    .then(response => response.json())
    .then(response => this.handleError(response))
  }

  handleError(response){
    if (response.error) {
      alert('That email account already has an account')
    }
    return response
  }

  render(){
    let { name, email, password } = this.state
    return(
      <section>
        <h2 className='sign-up-text'>Not a user? Make an account</h2>
        <input
          placeholder='Name'
          value={name}
          onChange={(e) => this.setState({name: e.target.value})} />
        <input
          placeholder='Email'
          value={email}
          onChange={(e) => this.setState({email: e.target.value})} />
        <input
          placeholder='Password'
          type='password'
          value={password}
          onChange={(e) => this.setState({password: e.target.value})} />
        <Link to='/'>
          <button onClick={()=> this.handleCreateUser(name, email, password) } className='user-btn'>Sign Up</button>
        </Link>
      </section>
    )
  }
}
