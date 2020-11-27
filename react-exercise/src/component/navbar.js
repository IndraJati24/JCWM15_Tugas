import React from "react";
import './component.css'
import {
  Navbar,
  Nav,
  NavDropdown,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    const styles = {
      borderRight: "1px solid #858686",
      paddingRight: "10px",
    };
    return (
      <Navbar bg="light" expand="lg" className="navIcon">
        <i className="fab fa-react"></i>
        <Navbar.Brand href="#home" style={styles}>
        <Link to="/content_1" className="link">React-Exercise</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/" className="link">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/carousel" className="link">Carousel</Link>
            </Nav.Link>
            <NavDropdown title="Practice" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/ToDo_List">To do list - exercise</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/news">News API</Link>
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            <i className="far fa-user"></i>
              Username
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
