import React from "react";
import "./ToDo_list.css";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toDo: ["makan", "minum"], id: [0, 1] };
  }
  tampilkan = (idx) => {
    if (idx == this.state.id) {
      var hasil = this.state.toDo.map((item, index) => (
        <tr key={index}>
          <td>
            <input
              type="text"
              refs="edit-1"
              value={item}
              onChange={() => console.log("value change")}
            />
          </td>
          <td>
            <button>Save</button>
            <button onClick={() => this.takJadi()}>Cancel</button>
          </td>
        </tr>
      ));
    } else {
      var hasil = this.state.toDo.map((item, index) => (
        <tr key={index}>
          <td>{item}</td>
          <td>
            <button refs="delete" onClick={() => this.kurang(index)}>
              ❌
            </button>
            <button refs="edit" onClick={() => this.edit(index)}>
              Edit
            </button>
          </td>
        </tr>
      ));
    }
    return hasil;
  };

  THead = () => {
    return (
      <thead style={{ textAlign: "center" }}>
        <tr>
          <th>Activity</th>
          <th>Action</th>
        </tr>
      </thead>
    );
  };
  tambah = () => {
    let input = this.refs.schedule.value;
    let tempSchedule = [...this.state.toDo];
    tempSchedule.push(input);
    this.setState({ toDo: tempSchedule });
    this.refs.schedule.value = "";
  };
  kurang = (index) => {
    console.log("dilet");
    let tempSchedule = [...this.state.toDo];
    tempSchedule.splice(index, 1);
    this.setState({ toDo: tempSchedule });
  };

  edit = (idx) => {
    console.log(`edit ke ${idx}`);
    this.setState({ id: idx.id });
  };
  takJadi = () => {
    console.log("tak jadi");
    {
      this.tampilkan();
    }
  };

  render() {
    return (
      <div className="container">
        <h1>To Do List Exercise</h1>
        <div className="table">
          <input ref="schedule" type="text" placeholder="Schedule" />
          <button onClick={this.tambah}>Add</button>
        </div>
        <table>
          {this.THead()}
          <tbody>{this.tampilkan()}</tbody>
        </table>
      </div>
    );
  }
}
export default Todo;
