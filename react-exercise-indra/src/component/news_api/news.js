import React from "react";
import Axios from "axios";
import "./news.css";

import { Card, Button, Nav, NavDropdown, Navbar } from "react-bootstrap";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      country: "id",
      category: "General",
      negara: "Indonesia",
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
          name: "Belgium",
          id: "be",
        },
        {
          name: "Brazil",
          id: "br",
        },
        {
          name: "Bulgaria",
          id: "bg",
        },
        {
          name: "Canada",
          id: "ca",
        },
        {
          name: "Colombia",
          id: "co",
        },
        {
          name: "Cuba",
          id: "cu",
        },
        {
          name: "China",
          id: "cn",
        },
        {
          name: "Czech Republic",
          id: "cz",
        },
        {
          name: "Egypt",
          id: "eg",
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
        {
          name: "South Korea",
          id: "kr",
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

  changeCountry = (idx) => {
    this.setState({
      country: this.state.listCountry[idx].id,
      negara: this.state.listCountry[idx].name,
      category: "General",
    });
    this.getNewsApi(idx);
  };

  getNewsApi = (idx) => {
    const { listCountry } = this.state;
    let URL = `http://newsapi.org/v2/top-headlines?country=${listCountry[idx].id}&apiKey=`;
    let KEY = "08bd8662b6804c879c662a27c4a8b1a6";

    Axios.get(URL + KEY)
      .then((respon) => {
        console.log(respon);
        this.setState({ news: respon.data.articles });
      })
      .catch((error) => console.log(error));
  };

  changeCategory = (idx) => {
    this.setState({ category: this.state.listCategory[idx] });
    this.getNewsApiCategory(idx);
  };

  getNewsApiCategory = (idx) => {
    const { country, listCategory } = this.state;
    let URL = `http://newsapi.org/v2/top-headlines?country=${country}&category=${listCategory[idx]}&apiKey=`;
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
      let show = {
        margin: "27px",
        boxShadow: "10px 10px #0984e3",
        width: "250px",
        height: "310px",
        overflow: "auto",
        padding: "15px",
      };
      return (
        <Card key={index} style={show}>
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

  showListCountry = () => {
    let country = this.state.listCountry.map((item, index) => (
      <NavDropdown.Item key={index} onClick={() => this.changeCountry(index)}>
        {item.name}
      </NavDropdown.Item>
    ));
    return country;
  };

  showCategory = () => {
    let category = this.state.listCategory.map((item, index) => (
      <NavDropdown.Item key={index} onClick={() => this.changeCategory(index)}>
        {item}
      </NavDropdown.Item>
    ));
    return category;
  };

  render() {
    let styles = {
      display: "flex",
      marginLeft: "15px",
      borderLeft: "1px solid #858686",
      alignItems: "center",
      color: "#0984e3",
    };

    let card = {
      display: "flex",
      flexWrap: "wrap",
    };
    console.log(this.state.news);
    
    return (
      <div>
        <div>
          <Navbar variant="outline-primary" expand="lg">
            <Navbar.Brand href="#home">News API</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown title="Country" id="basic-nav-dropdown">
                  <div style={{ overflow: "auto", height: "300px" }}>
                    {this.showListCountry()}
                  </div>
                </NavDropdown>

                <NavDropdown title="Category" id="basic-nav-dropdown">
                  <div>{this.showCategory()}</div>
                </NavDropdown>
                <div style={styles}>
                  <h5 style={{ paddingLeft: "10px" }}>
                    Country : {this.state.negara}
                  </h5>
                  <h5 style={{ marginLeft: "10px" }}>
                    Category : {this.state.category}
                  </h5>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <div style={card}>{this.showNews()}</div>
      </div>
    );
  }
}
export default News;
