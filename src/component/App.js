/* eslint-disable no-lone-blocks */
import "../App.css";
import Adduesr from "./Adduesr";
import Header from "./Header";
import Seach from "./Seach";
import Tablemember from "./Tablemember";
import React, { Component } from "react";
import DATA from "./data.json";

const { v4: uuidv4 } = require("uuid");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seachText: "",
      DATA: [],
      isEditForm: false,
      infoEditUser: [],
    };
  }
  
  componentWillMount() {
    // chack have localstorage yet
    if (localStorage.getItem("membership") === null) {
      localStorage.setItem("membership" , JSON.stringify(DATA))
    }
    else{
      var temp = JSON.parse(localStorage.getItem("membership"))
      this.setState({
        DATA  : temp
      });
    }

  }
  

  onChangeEditUser = () => {
    this.setState({
      isEditForm: !this.state.isEditForm,
    });
  };

  getText = (DL) => {
    this.setState({
      seachText: DL,
    });
  };
  getNewUserData = (name, tell, rights) => {
    var item = {};
    item.id = uuidv4();
    item.fullname = name;
    item.Tell = tell;
    item.Rights = rights;

    var items = this.state.DATA;
    items.push(item);
    // == kieu
    this.setState({
      DATA: items,
    });
    localStorage.setItem("membership" , JSON.stringify(items))
  };
  editUser = (value) => {
    this.setState({
      isEditForm: !this.state.isEditForm,
      infoEditUser: value,
    });
  };
  dataPly = (data) => {
    this.state.DATA.forEach((value, index) => {
      if (value.id === data.id) {
        value.Rights = data.Rights;
        value.fullname = data.fullname;
        value.Tell = data.Tell;
      }
    });
    localStorage.setItem("membership" , JSON.stringify(this.state.DATA))
  };
  getID = (id) => {
    var updateData = this.state.DATA
    updateData.splice( id - 1 , 1 )

    this.setState({
      DATA : updateData
    });

    localStorage.setItem("membership" , JSON.stringify(updateData))
  }
  render() {
    var dataFound = [];
    this.state.DATA.forEach((value) => {
      if (
        value.fullname
          .toLocaleUpperCase()
          .indexOf(this.state.seachText.toLocaleUpperCase()) !== -1
      ) {
        dataFound.push(value);
      }
    });
    return (
      <div>
        <Header></Header>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Seach
                isEditForm={this.state.isEditForm}
                // switch true false
                outputValue={(DL) => this.getText(DL)}
                // seach
                onChangeEditUser={() => this.onChangeEditUser()}
                // hide form
                infoEditUser={this.state.infoEditUser}
                //
                dataPly={(data) => this.dataPly(data)}
              ></Seach>
              <div className="row">
                <Tablemember
                  dataUpdate={dataFound}
                  //nem data
                  tabGfather={(value) => this.editUser(value)}
                  // lay gia tri de sua
                  getID={(id) => this.getID(id)}
                  //  lau id de xoa
                ></Tablemember>
                <Adduesr
                  getNewUserData={(name, tell, rights) =>
                    this.getNewUserData(name, tell, rights)
                  }
                ></Adduesr>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
