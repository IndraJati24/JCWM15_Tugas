import React from "react";
import "./page.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>This is Home Page</h1>
        <Link to="/content_2" className="link">
          <Button variant="primary">To Link Page</Button>
        </Link>
      </div>
    );
  }
}

export default Home;
