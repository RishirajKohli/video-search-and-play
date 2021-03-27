import "./SearchBar.css";
import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  handleInputChange = (e) => {
    this.setState({ term: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.makeRequest(this.state.term);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Video</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.handleInputChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
