import React, { Component } from "react";
import { Button } from "react-bootstrap";

class editTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: "",
      bottomText: ""
    };
    this._handleBottomTextChange = this._handleBottomTextChange.bind(this);
    this._handleTopTextChange = this._handleTopTextChange.bind(this);
    this._handleTextRemoval = this._handleTextRemoval.bind(this);
  }

  _handleTopTextChange(e) {
    this.setState({
      topText: e.target.value
    });
  }

  _handleBottomTextChange(e) {
    this.setState({
      bottomText: e.target.value
    });
  }

  _handleTextRemoval(input) {
    if (input == "bottomText") {
      this.setState({
        bottomText: ""
      });
    } else if (input == "topText") {
      this.setState({
        topText: ""
      });
    }
  }

  render() {
    let { topText, bottomText } = this.state;
    return (
      <React.Fragment>
        <input
          maxLength="30"
          value={topText}
          onChange={this._handleTopTextChange}
          placeholder="Enter Top Text"
          type="text"
        />
        <Button onClick={() => this._handleTextRemoval("topText")}>
          Remove Text
        </Button>
        <br />
        <input
          maxLength="30"
          value={bottomText}
          onChange={this._handleBottomTextChange}
          placeholder="Enter Bottom"
          type="text"
        />
        <Button onClick={() => this._handleTextRemoval("bottomText")}>
          Remove Text
        </Button>
        <br />
        <Button> Generate</Button>
      </React.Fragment>
    );
  }
}

export default editTemplate;
