import React from 'react';
import Form from './Components/Form';
import './App.css';
import Movies from './Components/Movies';

const API_KEY = "24edb4db";

class App extends React.Component {

  state = {
    movies : []
  }

  getMovie = async (e) => {
    e.preventDefault();

    const movieName = e.target.elements.movie.value;
    const api_call = await fetch(`http://www.omdbapi.com/?s=${movieName}&apikey=${API_KEY}`);
    const movieData = await api_call.json();
    this.setState({ movies : movieData.Search });

    console.log(this.state.movies);

  }

  render() {
    return(
      <div className="App">
          <header className="App-header">
            <h1 className="App-title">Movie Deetz!!!</h1>
          </header>
          <Form getMovie={this.getMovie} />
          <Movies movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
