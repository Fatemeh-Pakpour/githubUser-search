import React from "react";
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

  return <ul>{usersList}</ul>;
};

export default GithubList;
