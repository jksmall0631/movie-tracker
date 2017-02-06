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

  showFavorites(userId){
    const server = (`http://localhost:3000/api/users/${userId}/favorites`)
    fetch(server, {
      method:'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
    .then(response => response.json())
    .then(response => this.props.handleFavorites(response))
  }

  handleSignIn (username, password){
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
    .then(data => {
        this.props.handleUserAPI(data.data)
        this.showFavorites(data.data.id) })
    .catch(e => alert('You have entered an incorrect username or password.'));
  }

  render(){
    let { username, password, error } = this.state
    return(
      <section>
        <Link to={'/'} >
          <button className='back' className='back-btn'> Back </button>
        </Link>
        <h2 className='sign-up-text'>Already a user? Sign In</h2>
        <input
          placeholder='Email'
          value={username}
          onChange={(e) => this.setState({ username : e.target.value})} />
        <input
          placeholder='Password'
          type='password'
          value={password}
          onChange={(e) => this.setState({ password : e.target.value})} />
        <Link to='/'>
          <button onClick={()=> this.handleSignIn(username, password)} className='user-btn'> Sign In </button>
        </Link>
      </section>
    )
  }
}
