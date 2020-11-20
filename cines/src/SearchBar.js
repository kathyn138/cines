import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.search(this.state.search);
  }

  render() {
    return (
      <form className="form-inline my-4 justify-content-center"
        onSubmit={this.handleSubmit}>
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