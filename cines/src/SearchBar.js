import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <form className="form-inline my-4 justify-content-center" onSubmit={this.handleSubmit}>
        <input className="form-control col-5" id="search-input" 
        type="search" placeholder="Search for movies!"
          aria-label="Search" name="search" value={this.state.search}
          onChange={this.handleChange} />
        <button className="btn ml-2 col-1 search-btn" type="submit">Search</button>
      </form>
    )
  }
}

export default SearchBar;