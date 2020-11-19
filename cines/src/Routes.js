import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Home from './Home';
import NavBar from './NavBar';


class Routes extends React.PureComponent {

  render() {
    return (
      <div>
        <Route path="/" render={rtProps => <NavBar {...rtProps}
          handleLogout={this.props.handleLogout} />} />
        <div className="container-fluid">
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Routes;