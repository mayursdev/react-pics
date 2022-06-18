import React, { Component } from "react";

export default class SearchInput extends Component {
  state = {
    searchTerm: "",
  };

  onInputChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  };
  render() {
    return (
      <div className="search-input">
        <form action="" onSubmit={this.onFormSubmit}>
          <div className="ui fluid icon input">
            <input
              name="search"
              type="text"
              placeholder="Search images eg: flowers"
              onChange={this.onInputChange}
              value={this.state.searchTerm}
            />
            <i className="search icon" />{" "}
          </div>{" "}
        </form>
      </div>
    );
  }
}
