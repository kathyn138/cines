import React from 'react';
import './Home.css'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (

      <div className="row justify-content-center align-items-center home-row">
        <div className="col-8 text-center app-content">
          home
          </div>
      </div>

    )
  }
}

export default Home;