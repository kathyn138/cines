import React from 'react';
import CinesApi from './CinesApi';
import './MovieDetails.css';
class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        director: '',
        plot: '',
        posterSource: '',
        title: '',
        thumbsDown: 0,
        thumbsUp: 0,
        year: ''
      }
    };
  }

  async componentDidMount() {
    let result = await CinesApi.getMovie(this.props.match.params.movie);
    this.setState({ movie: result });
    console.log('movie', this.state.movie)
  }

  render() {
    let { director, plot, posterSource, title, thumbsDown, thumbsUp, year } = this.state.movie;

    let poster = posterSource ? <img src={posterSource} alt="movie poster"></img>
      : `This movie doesn't have a poster :(`;

    let directorLabel = director.split(',').length > 1 ? 'Directors' : 'Director';

    return (
      <div className="row justify-content-center">
        <div className="col-8 text-center movie-details-body">
          {poster}
          <h2 className="movie-title">{title}</h2>
          <h4>{year}</h4>
          <p>{directorLabel}: {director}</p>
          <p>Plot: {plot}</p>
        </div>
      </div>
    )
  }
}

export default MovieDetails;