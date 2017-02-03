import React, {Component} from 'react';
import { Link } from 'react-router';

export default class UserSignIn extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    }
  }

  handleSignIn (username, password) {
    console.log(this.props)
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
    .catch(e => this.setState({error: e}));
  }

  render(){
    let {username, password, error} = this.state
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
          <button onClick={()=> this.handleSignIn(username, password)}> Sign In </button>
        </Link>
        { error ? <p>Invalid Email/Password</p> : ''}
      </section>
    )
  }
}
