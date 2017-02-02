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
    const {store} = this.props
    const movieDatabase = ('https://api.themoviedb.org/3/discover/movie?api_key=1d0514b501ec10b990725f0f8f54ce01')
    fetch(movieDatabase)
      .then(response => {
        return response.json()})
      .then(response => {
        let movies = response.results
        this.props.handleAPI(movies)
    })
  }

  toggleButton() {
   this.state.buttonText === 'Sign In' ?
    this.setState({ buttonText: 'Home', linkTo: '/' }) :
    this.setState({ buttonText: 'Sign In', linkTo: '/login' })
  }

  render() {
    return (
      <div>
        <h1>Not Quite Netflix</h1>
        <Link to={this.state.linkTo}>
          <button onClick={()=> this.toggleButton() }>{this.state.buttonText}</button>
        </Link>
        {this.props.children}
      </div>
    )
  }
}
