import React, {Component} from 'react';

export default class Login extends Component{
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
        <input
          placeholder='Username'
          onChange={(e) = this.setState({username: e.target.value})}
          value={this.state.username}/>
        <input
          placeholder='Password'
          onChange={(e) = this.setState({password: e.target.value})}
          value={this.state.password}/>
        <button onClick={() => this.props.handleClick(this.state.username, this.state.password)}></button>
      </section>
    )
  }
}
