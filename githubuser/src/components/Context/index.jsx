import React, { Component } from "react";
import axios from "axios";

// this is setup our provider and consumer
const GithubContext = React.createContext();

export class Provider extends Component {
  state = {
    githubUser: [],
    loading: true
  };
  performSearch = (query = "benja") => {
    axios
      .get(`https://api.github.com/search/users?q=${query}`)
      .then(response => {
        this.setState({
          githubUser: response.data.items,
          loading: false
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };
  
  componentDidMount() {
    this.performSearch();
  }

  render() {
    return (
      <GithubContext.Provider
        value={{
          data: this.state.githubUser,
          loading: this.state.loading,
          action: { onSearch: this.performSearch }
        }}
      >
        {this.props.children}
      </GithubContext.Provider>
    );
  }
}
export const Consumer = GithubContext.Consumer;
