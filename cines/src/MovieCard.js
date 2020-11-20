import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

class MovieCard extends React.Component {
  render() {
    let { title, year, imdbid } = this.props.movie;
    return (
      <Link to={`/movies/${imdbid}`}>
        <li className="movie-item">{title} ({year})</li>
      </Link>
    )
  }
}

export default MovieCard;