import React, { Component } from 'react';
import { Link } from 'react-router'
// import Header from './Header';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      buttonText: 'Sign In',
      linkTo: '/login'
    }
  }


  componentWillMount() {
    const movieDatabase = ('https://api.themoviedb.org/3/discover/movie?api_key=1d0514b501ec10b990725f0f8f54ce01')
    fetch(movieDatabase)
      .then(response => {
        return response.json()})
      .then(response => {
        let movies = response.results
        this.props.handleAPI(movies)})
   const server = ('http://localhost:3000/api/users')
 //   fetch(server, {
 //     method:'POST',
 //     headers: {
 //       'Content-Type': 'application/json',
 //       'Accept': 'application/json',
 //     },
 //     body: JSON.stringify({email: 'tman2272@aol.com', password:'password'})
 //   })
 //   .then(response => response.json())
 //   .then(json => console.log(json));
  }



  toggleButton() {
   this.state.buttonText === 'Sign In' ?
    this.setState({ buttonText: 'Home', linkTo: '/' }) :
    this.setState({ buttonText: 'Sign In', linkTo: '/login' })
 }


  render() {
    return (
      <div>
        <h1>Movie Watcher</h1>
        <Link to={this.state.linkTo}>
          <button onClick={()=> this.toggleButton() }>{this.state.buttonText}</button>
        </Link>
        {this.props.children}
      </div>
    )
  }
}
