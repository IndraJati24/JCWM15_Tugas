import React from "react";

import {connect} from 'react-redux'

import { Button } from "react-bootstrap";

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleTambah = () =>{
    this.props.dispatch({type:'TAMBAH'})
  }

  handleKurang = () =>{
    this.props.dispatch({type:'KURANG'})
  }

  render() {
    return (
      <div style={styles.container}>
        <h1 style={{fontSize: "100px"}}>{this.props.count}</h1>
        <Button style={{ height: "35px" }} onClick={this.handleTambah}>
          Tambah
        </Button>
        <Button style={{ height: "35px" }} onClick={this.handleKurang}>
          Kurang
        </Button>
      </div>
    );
  }
}

const styles = {
  container: {
    margin: "100px auto",
    width: "300px",
    textAlign: "center",
    fontSize: "40px",
    backgroundColor : "aqua"
  },
};

const mapStateToProps = (state) => {
  return {
    count : state.count.count
  }
}

export default connect(mapStateToProps)(Count);
