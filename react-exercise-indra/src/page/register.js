import React from "react";
import Axios from "axios";
import { Button, Form } from "react-bootstrap";

import { Redirect } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userRegister: [],
    };
  }

  handleRegister = () => {
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    let email = this.refs.email.value;

    if (!username || !password || !email) return alert("Input all form");

    Axios.get(`http://localhost:2000/userLogin?username=${username}`)
      .then((res) => {
        console.log(res.data);
        if (res.data.length !== 0) return alert("Username sudah terdaftar");
        Axios.post("http://localhost:2000/userLogin", {
          username,
          password,
          email,
        })
        .then((res) => {
          console.log(res.data);
          this.setState({ userRegister: res.data });
        })
        .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
      
      

    this.refs.username.value = "";
    this.refs.password.value = "";
    this.refs.email.value = "";
  };

  render() {
    console.log(this.state.userRegister);
    if (this.state.userRegister.length !== 0) return <Redirect to="/login" />;
    return (
      <div style={styles.container}>
        <h1>Register</h1>
        <Form.Control
          style={styles.item}
          type="text"
          placeholder="Enter Username"
          ref="username"
        />
        <Form.Control
          style={styles.item}
          type="password"
          placeholder="Enter Password"
          ref="password"
        />
        <Form.Control
          style={styles.item}
          type="email"
          placeholder="Enter Email"
          ref="email"
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={this.handleRegister}
            style={{ height: "40px" }}
            variant="primary"
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    margin: "100px auto",
    width: "300px",
    height: "300px",
    backgroundColor: "aqua",
    padding: "10px",
  },
  item: {
    margin: "15px 0",
  },
};
export default Register;
