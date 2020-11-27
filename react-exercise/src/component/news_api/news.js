import React from "react";
import Axios from "axios";
// import Dropdown from "../Dropdown";

import { Card, Button, Nav, NavDropdown, Navbar } from "react-bootstrap";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      country: "id",
      category : "sports",
      listCountry: [
        {
          name: "Indonesia",
          id: "id",
        },
        {
          name: "Argentina",
          id: "ar",
        },
        {
          name: "Australia",
          id: "au",
        },
        {
          name: "Austria",
          id: "at",
        },
        {
          name: "Brazil",
          id: "br",
        },
        {
          name: "China",
          id: "cn",
        },
        {
          name: "France",
          id: "fr",
        },
        {
          name: "Italy",
          id: "it",
        },
        {
          name: "Mexico",
          id: "mx",
        },
        {
          name: "Nigeria",
          id: "ng",
        },
      ],
      listCategory: [
        "business",
        "entertainment",
        "health",
        "science",
        "sports",
        "technology",
      ],
    };
  }
  componentDidMount() {
    const { country, category } = this.state;
    let URL = `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=`;
    let KEY = "08bd8662b6804c879c662a27c4a8b1a6";

    Axios.get(URL + KEY)
      .then((respon) => {
        console.log(respon);
        this.setState({ news: respon.data.articles });
      })
      .catch((error) => console.log(error));
  }

  changeCountry = (idx) => {
    this.setState({ country: idx });
    this.getNewsApi(idx);
  };

  getNewsApi = (idx) => {
    const { category } = this.state;
    let URL = `http://newsapi.org/v2/top-headlines?country=${idx}&category=${category}&apiKey=`;
    let KEY = "08bd8662b6804c879c662a27c4a8b1a6";
    
    Axios.get(URL + KEY)
    .then((respon) => {
      console.log(respon);
      this.setState({ news: respon.data.articles });
    })
    .catch((error) => console.log(error));
  };
  
  changeCategory = (idx) => {
    // this.setState({ category :this.state.listCategory[idx]})
    this.getNewsApiCategory(idx)
    
  }

  getNewsApiCategory = (idx) => {
    const { country } = this.state;
    let URL = `http://newsapi.org/v2/top-headlines?country=${country}&category=${this.state.listCategory[idx]}&apiKey=`;
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

  showCountry = () => {
    let country = this.state.listCountry.map((item) => (
      <NavDropdown.Item onClick={() => this.changeCountry(item.id)}>
        {item.name}
      </NavDropdown.Item>
    ));
    return country;
  };

  showCategory = () => {
    let category = this.state.listCategory.map((item, index) => (
      <NavDropdown.Item onClick={() => this.changeCategory(index)}>
        {item}
      </NavDropdown.Item>
    ));
    return category;
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
              <Nav className="mr-auto">
                <NavDropdown title="Country" id="basic-nav-dropdown">
                  {this.showCountry()}
                </NavDropdown>

                <NavDropdown title="Category" id="basic-nav-dropdown">
                  {this.showCategory()}
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
