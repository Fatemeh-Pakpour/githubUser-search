import React, { Component } from "react";
// import * as API from '../../api'
import axios from 'axios';

// this is setup our provider and consumer
const GithubContext = React.createContext();

export class Provider extends Component {
  state = {
    githubUser: [],
    loading: true,
  };
  performSearch = (query = "benja" )=> {
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
  // performSearch = async(query = "John") =>{
  //   const res = await API.loadUsers(query)
  //   const users = res.items || [];
  //   this.setState({githubUser : users , loading:false})
  // }
  
  componentDidMount() {
    this.performSearch();
  }
  
  render() {
    return (
      <GithubContext.Provider
        value={{
          data: this.state.githubUser,
          loading : this.state.loading,
          action: { onSearch: this.performSearch }
        }}>   
        
        {this.props.children}
      </GithubContext.Provider>
    );
  }
}
export const Consumer = GithubContext.Consumer;
