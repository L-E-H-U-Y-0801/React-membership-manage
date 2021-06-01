import React, { Component } from "react";
import EditUesr from "./EditUesr";

class Seach extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saveValue: "",
    };
  }

  inputvalue = (e) => {
    this.setState({
      saveValue: e.target.value,
    });
    this.props.outputValue(e.target.value);
  };
  EditForm = () => {
    if (this.props.isEditForm === true) {
      return (
        <EditUesr
          dataPly={(data) => this.props.dataPly(data)}
          onChangeEditUser={() => this.props.onChangeEditUser()}
          infoEditUser={this.props.infoEditUser}
        ></EditUesr>
      );
    }
  };
  render() {
    return (
      <div className="form-group">
        <div className="btn-group">
          <input
            type="text"
            name
            id
            className="form-control"
            placeholder="Ender key words"
            aria-describedby="helpId"
            onChange={(e) => this.inputvalue(e)}
          />
          <button
            className="btn btn-info"
            onClick={() => this.props.outputValue(this.state.saveValue)}
          >
            seach
          </button>
          {/* nó trả về nột kết quả nên phải gọi một cái arrayfunc  
          trường hợp trên arrayfunc trả về arrayfunc */}
        </div>
        <hr></hr>
        {this.EditForm()}
      </div>
    );
  }
}

export default Seach;
// tất cả cái này bao gồm hàm sẽ mang ra App để chạy
