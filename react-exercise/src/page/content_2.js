import React from "react";
import "./page.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class Content2 extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>This is Link Page</h1>
        <Link to="/" className="link">
          <Button variant="primary">To Home Page</Button>
        </Link>
      </div>
    );
  }
}

export default Content2;
