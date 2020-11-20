import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Home from './Home';
import NavBar from './NavBar';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';

class Routes extends React.PureComponent {
  render() {
    return (
      <div>
        <Route path="/" render={rtProps => <NavBar {...rtProps}
          handleLogout={this.props.handleLogout} />} />
        <div className="container-fluid">
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/movies/search" render={() => <MovieList />} />
            <Route exact path="/movies/:movie" render={rtProps => <MovieDetails {...rtProps} />} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Routes;