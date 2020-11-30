import React from "react";
import "./component.css";
import { Carousel } from "react-bootstrap";

class Caro extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: "93vh" }}
            className="d-block w-100"
            src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "93vh" }}
            className="d-block w-100"
            src="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "93vh" }}
            className="d-block w-100"
            src="https://html5box.com/html5gallery/images/Swan_1024.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Caro;
