import React from "react";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
const Github = props => {
  const path = `/users/${props.userAccount}`
  return (
    <Card className="user-card">
      <Card.Img variant="top" className="image" src={props.url} alt="" />
      <Link to ={path}>
        <Card.Text>{props.userAccount}</Card.Text>
      </Link>
    </Card>
  );
};
export default Github;
