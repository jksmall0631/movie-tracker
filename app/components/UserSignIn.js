import React, {Component} from 'react';
import { Link } from 'react-router';

export default class UserSignIn extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
    }
  }

  handleSignIn (username, password) {
    const server = ('http://localhost:3000/api/users')
    fetch(server, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({email: username, password: password})
    })
    .then(response => response.json())
    .then(data => this.props.handleUserAPI(data.data))
    .then(data => this.getUserFavorites(data.id))
    .catch(e => alert('Wrong Information'));
  }

  getUserFavorites (userId) {
    const server = (`http://localhost:3000/api/users/${userId}/favorites`)
    fetch(server, {
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
    .then(response => response.json())
    .then(response => console.log(response))
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
        <Link to='/'>
          <button onClick={()=> this.handleSignIn(username, password)}>Sign In</button>
        </Link>
      </section>
    )
  }
}
