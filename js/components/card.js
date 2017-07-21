import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card" key={this.props.key}>
        <h3>
          {this.props.title}
        </h3>
        <p>
          {this.props.content}
        </p>
      </div>
    );
  }
}

export default Card;
