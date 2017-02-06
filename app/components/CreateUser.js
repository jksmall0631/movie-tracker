import React, {Component} from 'react';
import {Link} from 'react-router';


export default class CreateUser extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      message: '',
    }
  }
  handleCreateUser (name, email, password) {
    let emailCheck = this.checkEmail(email);
    if(emailCheck){
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
      .then(response => {!response.error ? this.setState({message: 'create user successful', name: '', email: '', password: ''}) : this.handleError(response)})
    } else {
      this.setState({message: 'That email is not valid', name: '', email: '', password: ''})
    }
  }

  handleError(response) {
    if (response.error) {
      this.setState({message: 'That email account already has an account'})
    }
    return response
  }

  checkEmail(email){
    var re = /(\w+)\@(\w+)\.[a-zA-Z]/g;
    var test = re.test(email);
    return test
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
          <button onClick={()=> this.handleCreateUser(name, email, password) } className='user-btn'>Sign Up</button><br></br>
          <h3 className='message'>{this.state.message}</h3>
      </section>
    )
  }
}
