import React, { Component } from "react";

class EditUesr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.infoEditUser.id,
      fullname: this.props.infoEditUser.fullname,
      Tell: this.props.infoEditUser.Tell,
      Rights: this.props.infoEditUser.Rights,
    };
  }
  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  sendDataEdit = () => {
    const data = [];
    data.id = this.state.id;
    data.Tell = this.state.Tell;
    data.fullname = this.state.fullname;
    data.Rights = this.state.Rights;

    this.props.onChangeEditUser();
    this.props.dataPly(data)
  };
  render() {
    return (
      <div className="col-12">
        <div className="card text-white bg-warning mb-3 mt-3 text-center">
          <div className="card-header">Edit membership imformation</div>
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
                defaultValue={this.props.infoEditUser.fullname}
                onChange={(e) => this.onChange(e)}
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
                defaultValue={this.props.infoEditUser.Tell}
                onChange={(e) => this.onChange(e)}
              />
            </div>
            <div className="form-group">
              <select
                className="custom-select"
                aria-label="Default select example"
                name="Rights"
                defaultValue={this.props.infoEditUser.Rights}
                onChange={(e) => this.onChange(e)}
              >
                <option selected>choose default permissions</option>
                <option value={2}>Magager</option>
                <option value={4}>Moderator</option>
                <option value={3}>Officer</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="button"
                className="btn btn-block btn-primary"
                value="Save User"
                onClick={() => this.sendDataEdit()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditUesr;
