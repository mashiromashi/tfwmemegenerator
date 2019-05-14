import React, { Component } from "react";
import "./App.css";
import { request, METHODS } from "http";
import { base_url } from "./util/global_path";
import NavBar from "./components/navBar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
    this.templateArray = [];
  }

  componentDidMount() {
    fetch(`${base_url}/images/getimagelist`, {
      method: "GET"
    })
      .then(res => {
        if (res.ok) return res.json();
      })
      .then(data => {
        this.setState({
          images: data
        });
      });
  }
  render() {
    let { images } = this.state;
    return (
      <div>
        <NavBar />
        {images.map((img, index) => {
          return (
            <img
              src={`${base_url}/burmeseTemplates/${img}`}
              style={{ width: 100, height: 100 }}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
