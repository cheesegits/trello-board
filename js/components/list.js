import React, { Component } from "react";

import Card from "./card";

class List extends Component {
  render() {
    // console.log(this.props.onChange);
    return (
      <div className="list">
        <h2>
          {this.props.title}
        </h2>
        <div className="cards">
          <Card title="Card Title" content="Content of the card goes here" />
        </div>
        <div>
          <form onSubmit={this.props.onSubmit}>
            <h3>New Card</h3>
            <input type="text" onChange={this.props.onChange} />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

module.exports = List;
