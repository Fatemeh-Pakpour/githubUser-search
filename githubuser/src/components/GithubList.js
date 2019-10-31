import React from "react";
// import {Consumer} from './Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import Github from "./Github";
import NoUser from "./NoUser";

const GithubList = props => {
  const results = props.data;
  console.log(results);
  let usersList;
  if (results.length > 0) {
    usersList = results.map(user => (
      <Github
        userAccount={user.login}
        url={user.avatar_url}
        id={user.id}
        key={user.id}
      />
    ));
  } else {
    usersList = <NoUser />;
  }

  return (<Container className = "users-list">{usersList}</Container>);
};

export default GithubList;
