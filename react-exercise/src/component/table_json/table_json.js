import React from "react";
import Axios from "axios";
import { Button, Table, Form } from "react-bootstrap";

class TableJson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dbUsers: [],
      editForm: false,
      indexForm: -1,
    };
  }

  componentDidMount = () => {
    Axios.get("http://localhost:2000/users")
      .then((res) => {
        console.log(res.data);
        this.setState({ dbUsers: res.data });
      })
      .catch((err) => console.log(err));
  };

  tableHead = () => {
    return (
      <thead>
        <tr>
          <th>#</th>
          <th>First_Name</th>
          <th>Last_Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
    );
  };

  tableBody = (idx) => {
    let { dbUsers, indexForm } = this.state;
    return (
      <tbody>
        {dbUsers.map((item, index) => {
          if (indexForm == index) {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <Form.Control
                    type="text"
                    placeholder="Enter First Name"
                    ref="firstnameedit"
                  />
                </td>
                <td>
                  <Form.Control
                    type="text"
                    placeholder="Enter Last Name"
                    ref="lastnameedit"
                  />
                </td>
                <td>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    ref="emailedit"
                  />
                </td>
                <td>
                  <Button>SAVE</Button>
                  <Button>CANCEL</Button>
                </td>
              </tr>
            );
          } else {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>
                  <Button
                    onClick={() => {
                      this.handleEdit(index);
                    }}
                  >
                    EDIT
                  </Button>
                  <Button onClick={() => this.handleDelete(item.id)}>
                    DELETE
                  </Button>
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    );
  };

  tableInput = () => {
    return (
      <tbody>
        <tr>
          <td>#</td>
          <td>
            <Form.Control
              type="text"
              placeholder="Enter first Name"
              ref="firstname"
            />
          </td>
          <td>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              ref="lastname"
            />
          </td>
          <td>
            <Form.Control type="email" placeholder="Enter Email" ref="email" />
          </td>
          <td>
            <Button onClick={this.handleAdd}>SUBMIT</Button>
          </td>
        </tr>
      </tbody>
    );
  };

  table = () => {
    return (
      <Table>
        {this.tableHead()}
        {this.tableBody()}
        {this.tableInput()}
      </Table>
    );
  };

  handleAdd = () => {
    let first_name = this.refs.firstname.value;
    let last_name = this.refs.lastname.value;
    let email = this.refs.email.value;
    console.log(first_name, last_name, email);

    Axios.post("http://localhost:2000/users", {
      first_name,
      last_name,
      email,
    })
      .then((res) => {
        console.log(res.data);
        Axios.get("http://localhost:2000/users")
          .then((res) => {
            console.log(res.data);
            this.setState({ dbUsers: res.data });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));

    this.refs.firstname.value = "";
    this.refs.lastname.value = "";
    this.refs.email.value = "";
  };

  handleDelete = (index) => {
    Axios.delete(`http://localhost:2000/users/${index}`)
      .then((res) => {
        console.log(res.data);
        Axios.get("http://localhost:2000/users")
          .then((res) => {
            console.log(res.data);
            this.setState({ dbUsers: res.data });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  handleEdit = (index) => {
    console.log(`edit, ${index}`);
    this.setState({
      editForm: true,
      indexForm: index,
    });

    this.tableBody();
  };

  render() {
    console.log(this.state.dbUsers);
    return (
      <div>
        <h1>Table Json</h1>
        {this.table()}
      </div>
    );
  }
}

export default TableJson;
