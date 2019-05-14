import React, { Component } from "react";
import "./App.css";
import { base_url } from "./components/util/global_path";
import NavBar from "./components/navBar";
import GetAllTemplates from "./components/getAllTemplates";
import EditTemplate from "./components/editTemplate";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <EditTemplate />
      </React.Fragment>
    );
  }
}

export default App;
