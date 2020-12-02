import React from "react";
import "./component.css";
import { Navbar, Nav, NavDropdown, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { logout } from "../action";

class Navigation extends React.Component {
  handleLogout = () => {
    this.props.logout();
    localStorage.removeItem("username");
  };
  render() {
    const styles = {
      borderRight: "1px solid #858686",
      paddingRight: "10px",
    };
    return (
      <Navbar bg="light" expand="lg" className="navIcon">
        <i className="fab fa-react"></i>
        <Navbar.Brand href="#home" style={styles}>
          React-Exercise
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/" className="link">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/carousel" className="link">
                Carousel
              </Link>
            </Nav.Link>
            <NavDropdown title="Practice" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/ToDo_List">To do list - exercise</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/news">News API</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/table_json">Table Json</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/count">Counter-Redux</Link>
              </NavDropdown.Item>

              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <i className="far fa-user"></i>
              {this.props.username ? this.props.username : "Username"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {this.props.username ? (
                <Dropdown.Item onClick={this.handleLogout}>
                  Logout
                </Dropdown.Item>
              ) : (
                <>
                  <Dropdown.Item as={Link} to="/login">
                    Login
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/register">
                    Register
                  </Dropdown.Item>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
  };
};

export default connect(mapStateToProps, { logout })(Navigation);
