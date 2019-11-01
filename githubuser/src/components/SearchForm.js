import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Consumer } from "./Context";

class SearchForm extends Component {
  state = {
    textSearch: " "
  };

  onSearchChange = event => {
    this.setState({ textSearch: event.target.value });
  };

  render() {
    console.log(this.state.textSearch);
    return (
      <Consumer>
        {context => {
          const handleSubmit = event => {
            event.preventDefault();
            const search = event.target.search.value.trim();
            if (!search.length) {
              alert("Please Enter The Github User");
            } else {
              context.action.onSearch(this.query.value);
              event.target.reset();
            }
          };
          return (
            <form className="search-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter the github account"
                name="search"
                ref={input => (this.query = input)}
                onChange={this.onSearchChange}
              />
              <button type="submit" className="search-btn">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          );
        }}
      </Consumer>
    );
  }
}

export default SearchForm;
