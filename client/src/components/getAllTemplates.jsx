import React, { Component } from "react";
import { base_url } from "./util/global_path";
import NavBar from "./navBar";

class getAllTemplates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
    this.templateArray = [];
  }

  componentDidMount() {
    fetch(`${base_url}/images/getTemplateList`, {
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
              onClick={`${base_url}/edit`}
            />
          );
        })}
      </div>
    );
  }
}

export default getAllTemplates;
