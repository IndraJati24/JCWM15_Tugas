import React from "react";
import Axios from "axios";
import { Button, Table, Form } from "react-bootstrap";

class TableJson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dbUsers: [],
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

  tableBody = () => {
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
                    value = {item.first_name}
                  />
                </td>
                <td>
                  <Form.Control
                    type="text"
                    placeholder="Enter Last Name"
                    ref="lastnameedit"
                    value = {item.last_name}
                  />
                </td>
                <td>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    ref="emailedit"
                    value = {item.email}
                  />
                </td>
                <td>
                  <Button style={{height: "35px"}}
                    onClick={() => {
                      this.handleSave(index);
                    }}
                  >
                    SAVE
                  </Button>
                  <Button style={{height: "35px"}} onClick={this.handleCancel}>CANCEL</Button>
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
                  <Button style={{height: "35px"}}
                    onClick={() => {
                      this.handleEdit(index);
                    }}
                  >
                    EDIT
                  </Button>
                  <Button style={{height: "35px"}}onClick={() => this.handleDelete(item.id)}>
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
            <Button style={{height: "35px"}}onClick={this.handleAdd}>SUBMIT</Button>
          </td>
        </tr>
      </tbody>
    );
  };

  tableSort = () => {
    return (
      <thead>
        <tr>
          <td></td>
          <td>
            <Button style={{height: "35px"}}onClick={this.sortFirstName}>Sort</Button>
          </td>
          <td>
            <Button style={{height: "35px"}}onClick={this.sortLastName}>Sort</Button>
          </td>
          <td>
            <Button style={{height: "35px"}}onClick={this.sortEmail}>Sort</Button>
          </td>
          <td></td>
        </tr>
      </thead>
    );
  };

  table = () => {
    return (
      <Table>
        {this.tableSort()}
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
    this.setState({
      indexForm: index,
    });

  };

  handleSave = (index) => {
    let first_name = this.refs.firstnameedit.value;
    let last_name = this.refs.lastnameedit.value;
    let email = this.refs.emailedit.value;

    const { dbUsers } = this.state;
    Axios.put(`http://localhost:2000/users/${dbUsers[index].id}`, {
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

    this.setState({ indexForm: -1 });
  };

  handleCancel = () => {
    Axios.get("http://localhost:2000/users")
      .then((res) => {
        console.log(res.data);
        this.setState({ dbUsers: res.data });
      })
      .catch((err) => console.log(err));

    this.setState({ indexForm: -1 });
  };

  sortFirstName = () => {
    console.log("sort first  name")
    Axios.get("http://localhost:2000/users?_sort=first_name&_order=asc")
    .then((res) => {
      console.log(res.data);
      this.setState({ dbUsers: res.data });
    })
    .catch((err) => console.log(err));
  }

  sortLastName = () => {
    console.log("sort first  name")
    Axios.get("http://localhost:2000/users?_sort=lirst_name&_order=asc")
    .then((res) => {
      console.log(res.data);
      this.setState({ dbUsers: res.data });
    })
    .catch((err) => console.log(err));
  }

  sortEmail = () => {
    console.log("sort first  name")
    Axios.get("http://localhost:2000/users?_sort=email&_order=asc")
    .then((res) => {
      console.log(res.data);
      this.setState({ dbUsers: res.data });
    })
    .catch((err) => console.log(err));
  }

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
