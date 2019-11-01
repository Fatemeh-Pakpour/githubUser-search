import React from "react";
import { Consumer } from "./Context";

const Loading = props => {
  return (
    <Consumer>
      {({ loading }) => {
        if (loading === true) {
          return <h1>Loading ...</h1>;
        } else {
          return props.children;
        }
      }}
    </Consumer>
  );
};

export default Loading;
