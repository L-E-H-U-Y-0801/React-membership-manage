/* eslint-disable eqeqeq */
import React, { Component } from "react";

class Tabchild extends Component {
  premissionShow = () => {
    if (this.props.rights == 1) {
      return "Director";
    }
    if (this.props.rights == 2) {
      return "Magager";
    }
    if (this.props.rights == 4) {
      return "Moderator";
    } else {
      return "Officer";
    }
  };

  getID = (id) => {
    this.props.getID(id)
  }


  render() {
    return (
      <tr>
        <td>{this.props.stt }</td>
        <td>{this.props.username}</td>
        <td>{this.props.tell}</td>
        <td>{this.premissionShow()}</td>
        <td>
          <div className="btn-group">
            <div className="btn btn-warning" onClick={() => this.props.tabParent()}>
              <i className="fa fa-edit">Edit</i>
            </div>
            <div className="btn btn-danger" onClick={() => this.getID(this.props.stt)}>
              <i className="fa fa-times">Leave</i>
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

export default Tabchild;
