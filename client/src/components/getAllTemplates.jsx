import React, { Component } from "react";
import { base_url } from "./util/global_path";
import { Router, Route } from "react-router";
import { Button } from "react-bootstrap";
import "./util/template.css";
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
            <div className="container">
              <img
                src={`${base_url}/burmeseTemplates/${img}`}
                style={{ width: 400, height: 400 }}
                onClick={`${base_url}/edit`}
                alt="Avatar"
                className="image"
              />
              <div className="overlay">
                <button>Edit</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default getAllTemplates;
