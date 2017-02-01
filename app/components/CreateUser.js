import React, {Component} from 'react';

export default class CreateUser extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  handleCreateUser (name, email, password) {
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
    .then(json => console.log(json));
  }

  render(){

    let {name, email, password} = this.state

    return(
      <section>
        <h2>Not a user? Make an account</h2>
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
          value={password}
          onChange={(e) => this.setState({password: e.target.value})} />
        <button onClick={()=> this.handleCreateUser(name, email, password) }>Sign Up</button>
      </section>
    )
  }
}
