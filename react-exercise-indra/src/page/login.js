import React from "react";
import Axios from "axios";
import { Button, Form } from "react-bootstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogin: [],
    };
  }
  handleLogin = () => {
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    console.log(username, password);

    if (!username || !password) return alert("Input all form");
    Axios.get(
      `http://localhost:2000/userLogin?username=${username}&password=${password}`
    )
      .then((res) => {
        console.log(res.data);
        if (res.data.length === 0) return alert("Invalid Username or Password");
        this.setState({ userLogin: res.data[0] });
      })
      .catch((err) => console.log(err));

    this.refs.username.value = "";
    this.refs.password.value = "";
  };
  render() {
    console.log(this.state.userLogin);
    return (
      <div style={styles.container}>
        <h1>Login</h1>
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={this.handleLogin}
            style={{ height: "40px" }}
            variant="primary"
          >
            Login
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
export default Login;
