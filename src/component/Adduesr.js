/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Adduesr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddmember: false,
      id: "",
      fullname: "",
      Tell: "",
      Rights: "",
    };
  }
  changeStatus = () => {
    this.setState({
      isAddmember: !this.state.isAddmember,
    });
  };
  displaymember = () => {
    if (this.state.isAddmember === true) {
      return (
        <div
          className="btn btn-block btn-secondary"
          onClick={() => this.changeStatus()}
        >
          Close Tap Additon
        </div>
      );
    } else {
      return (
        <div
          className="btn btn-block btn-info"
          onClick={() => this.changeStatus()}
        >
          Addition member
        </div>
      );
    }
  };
  inputvalue = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });

    var item = [];
    item.id = this.state.id;
    item.fullname = this.state.fullname;
    item.Tell = this.state.Tell;
    item.Rights = this.state.Rights;
  };
  displayForm = () => {
    if (this.state.isAddmember === true) {
      return (
        <form>
          <div
            className="card text-dark bg-info mb-3 mt-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header">Additional</div>
            <div className="card-body">
              <h5 className="card-title">Name Uesr</h5>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="fullname"
                  id
                  aria-describedby="helpId"
                  placeholder="fullname"
                  onChange={(e) => this.inputvalue(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="Tell"
                  id
                  aria-describedby="helpId"
                  placeholder="Number phone"
                  onChange={(e) => this.inputvalue(e)}
                />
              </div>
              <div className="form-group">
                <select
                  className="custom-select"
                  aria-label="Default select example"
                  name="Rights"
                  onChange={(e) => this.inputvalue(e)}
                >
                  <option selected>choose default permissions</option>
                  <option value={2}>Magager</option>
                  <option value={4}>Moderator</option>
                  <option value={3}>Officer</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="reset"
                  className="btn btn-block btn-primary"
                  onClick={() =>
                    this.props.getNewUserData(
                      this.state.fullname,
                      this.state.Tell,
                      this.state.Rights
                    )
                  }
                  value="NEW USER"
                />
              </div>
            </div>
          </div>
        </form>
      );
    }
  };

  render() {
    return (
      <div className="col-3">
        {this.displaymember()}
        {this.displayForm()}
      </div>
    );
  }
}

export default Adduesr;
