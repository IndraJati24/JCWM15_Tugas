import React from "react";
import Axios from "axios";
import Dropdown from "../Dropdown";

import { Card, Button, Nav, NavDropdown, Navbar } from "react-bootstrap";

// let URL = `http://newsapi.org/v2/top-headlines?country=${country}&apiKey=`;
// let KEY = "08bd8662b6804c879c662a27c4a8b1a6";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      country: "id",
      listCountry: [{ country: "id" }, { country: "ar" }],
    };
  }
  componentDidMount() {
    const { country } = this.state;
    let URL = `http://newsapi.org/v2/top-headlines?country=${country}&apiKey=`;
    let KEY = "08bd8662b6804c879c662a27c4a8b1a6";

    Axios.get(URL + KEY)
      .then((respon) => {
        console.log(respon);
        this.setState({ news: respon.data.articles });
      })
      .catch((error) => console.log(error));
  }

  changeCountry = (id) => {
    this.setState({ country: id });
    this.getNewsApi(id);
  };

  getNewsApi = (id) => {
    let URL = `http://newsapi.org/v2/top-headlines?country=${id}&apiKey=`;
    let KEY = "08bd8662b6804c879c662a27c4a8b1a6";

    Axios.get(URL + KEY)
      .then((respon) => {
        console.log(respon);
        this.setState({ news: respon.data.articles });
      })
      .catch((error) => console.log(error));
  };

  showNews = () => {
    return this.state.news.map((item, index) => {
      return (
        <Card key={index} style={{ width: "18rem", marginRight: "15px" }}>
          <Card.Img variant="top" src={item.urlToImage} />
          <Card.Body>
            <Card.Title>{item.tittle}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Button href={item.url} variant="primary">
              Read More
            </Button>
          </Card.Body>
        </Card>
      );
    });
  };

  render() {
    console.log(this.state.news);
    return (
      <div>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">News API</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Dropdown></Dropdown>
              <Nav className="mr-auto">
                <NavDropdown title="Country" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => this.changeCountry("id")}>
                    Indonesia
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => this.changeCountry("ar")}>
                    Argentina
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Category" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {this.showNews()}
        </div>
      </div>
    );
  }
}
export default News;
