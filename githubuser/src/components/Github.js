import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
const Github = props => {
  return (
    <Card className="user-card">
      <Card.Img variant="top" className="image" src={props.url} alt="" />
      <Card.Text>{props.userAccount}</Card.Text>
    </Card>
  );
};
export default Github;
