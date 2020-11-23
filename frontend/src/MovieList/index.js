import React from 'react';
import SearchBar from '../SearchBar';
import MovieCard from '../MovieCard';
import CinesApi from '../CinesApi';
import './MovieList.css';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
    this.searchMovies = this.searchMovies.bind(this);
  }

  async searchMovies(query) {
    let result = await CinesApi.searchMovies(query);
    this.setState({ movies: result });
  }

  render() {
    let movies = this.state.movies.length ? this.state.movies.map(m =>
      <MovieCard movie={m} key={m.imdbid} />) : "Start your search now!";
    return (
      <div className="row justify-content-center">
        <div className="col-8 text-center">
          <SearchBar search={this.searchMovies} />
          <div className="card mx-auto movie-list-body">
            <ul className="movie-list-group">
              {movies}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieList;