import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Link to={`/movies/:movie`}>
        <li class="movie-item">Cras justo odio</li>
      </Link>
    )
  }
}

export default MovieCard;