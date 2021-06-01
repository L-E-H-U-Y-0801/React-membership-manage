/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/scope */
import React, { Component } from "react";
// import DATA from "./data.json";
import Tabchild from "./Tabchild";
class Tablemember extends Component {

  tableChild = () =>
    this.props.dataUpdate.map((value, index) => {
      return (
        <Tabchild
          stt={index + 1}
          username={value.fullname}
          tell={value.Tell}
          rights={value.Rights}
          tabParent={() => this.props.tabGfather(value)}
          getID={(id) => this.props.getID(id)}
        ></Tabchild>
      );
    });
  
  render() {
    return (
      <div className="col-9">
        <table className="table table-striped table-hover table-striped table-inverse">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Number phone</th>
              <th>Righs</th>
              <th>Manipulation</th>
            </tr>
          </thead>
          <tbody>{this.tableChild()}</tbody>
        </table>
      </div>
    );
  }
}

export default Tablemember;
