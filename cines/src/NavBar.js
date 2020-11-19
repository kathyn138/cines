import React from 'react';
import { NavLink } from "react-router-dom";
import './NavBar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <nav className="navbar justify-content-between">
        <NavLink className="navbar-brand" to="/">Cines</NavLink>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies/search">Search</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar;