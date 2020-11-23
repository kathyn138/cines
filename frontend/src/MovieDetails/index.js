import React from 'react';
import CinesApi from '../CinesApi';
import './MovieDetails.css';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      director: ''
    };
    this.handleVote = this.handleVote.bind(this);
  }

  async componentDidMount() {
    let result = await CinesApi.getMovie(this.props.match.params.movie);
    this.setState(result);
  }

  async handleVote(vote) {
    if (this.state.thumbsDown === 0 && this.state.thumbsUp === 0) {
      let result = await CinesApi.initialVote(this.state.imdbid, this.state.title, vote);
      this.setState(result);
    } else {
      let result = await CinesApi.vote(this.state.imdbid, vote);
      this.setState(result);
    }
  }

  render() {
    let { director, plot, poster, title, thumbsDown, thumbsUp, year } = this.state;

    let posterSource = poster ? <img src={poster} alt="movie poster"></img>
      : `This movie doesn't have a poster :(`;

    let directorLabel = director.split(',').length > 1 ? 'Directors' : 'Director';

    return (
      <div className="row justify-content-center">
        <div className="col-8 text-center movie-details-body">
          {posterSource}
          <h2 className="movie-title">{title}</h2>
          <h4>{year}</h4>
          <p>{directorLabel}: {director}</p>
          <p>
            <span className="thumbs-up">
              <i className="fas fa-thumbs-up" onClick={() => this.handleVote('up')}></i> {thumbsUp}
            </span>
            <span className="thumbs-down">
              <i className="fas fa-thumbs-down" onClick={() => this.handleVote('down')}></i> {thumbsDown}
            </span>
          </p>
          <p>Description: {plot}</p>
        </div>
      </div>
    )
  }
}

export default MovieDetails;