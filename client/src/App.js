import React, { Component } from "react";
import "./App.css";
import { request, METHODS } from "http";
//import { url } from "inspector";
import { base_url } from "./util/global_path";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
    this.templateArray = [];
  }

  componentDidMount() {
    //url = "localhost:3001/burmesetemplates/buddha.jpg";
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
