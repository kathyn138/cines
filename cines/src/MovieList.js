import React from 'react';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';
import './MovieList.css';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-8 text-center">
          <SearchBar />
          <div className="card mx-auto movie-list-body">
            <ul className="movie-list-group">
              <MovieCard />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieList;