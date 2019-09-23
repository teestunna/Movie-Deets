import React from 'react';
import Title from './Components/Title';
import Form from './Components/Form';
import Movie from './Components/Movies';

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
            <div className="col-xs-5 title-container">
              <Title />
            </div>
            <div className="form-container">
              <Form getMovie={this.getMovie} />
            </div>
            <div className="movie-container">
              <Movie movies={this.state.movies} />
            </div>
          </div>
    );
  }

}

export default App;
