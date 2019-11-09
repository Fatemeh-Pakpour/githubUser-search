import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import SearchForm from "./SearchForm";
import GithubList from "./GithubList";
import Loading from "./Loading";

const Home = ()=>{
    return (
        <Container>
            <SearchForm />
              <Loading>
                <GithubList />
              </Loading>
        </Container>

    )
}

export default Home;