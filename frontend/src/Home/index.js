import React from 'react';
import './Home.css'

class Home extends React.Component {
  render() {
    return (
      <div className="row justify-content-center align-items-center home-row">
        <div className="col-8 text-center">
          <h1>Welcome to Cines</h1>
          <p className="home-body">Search for movies today.</p>
        </div>
      </div>
    )
  }
}

export default Home;