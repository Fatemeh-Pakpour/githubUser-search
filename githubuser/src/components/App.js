import React, { Component } from "react";
import axios from "axios";
// import {Provider} from './Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import SearchForm from "./SearchForm";
import GithubList from "./GithubList";
import "../App.css";

class App extends Component {
  state = {
    githubUser: [],
    loading: true
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
  componentDidMount() {
    this.performSearch();
  }

  render() {
    console.log(this.state.githubUser);
    return (
      // <Provider value = {{
      //  githubUser: this.state.githubUser,
      //  actions:{
      //   onSearch : this.performSearch
      //  }
      //  }}>
        <Container>
          <SearchForm onSearch={this.performSearch} />
          <div className="main-content">
            {
            (this.state.loading)
            ?<p>Loading...</p> 
            :<GithubList data ={this.state.githubUser}/>
            }
        </div>
        </Container>
      // </Provider>
    );
  }
}

export default App;
