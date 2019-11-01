import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import SearchForm from "./SearchForm";
import GithubList from "./GithubList";
import Loading from "./Loading";
import "../App.css";

class App extends Component {
  render() {
    return (
      <Container>
        <SearchForm />
        <Loading>
          <GithubList/>
          </Loading>  
      </Container>
    );
  }
}
export default App;
