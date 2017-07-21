import React, { Component } from "react";

import Card from "./card";

class List extends Component {
  listCards(cards) {
    console.log("mock array: ", cards);
    const createCards = cards.map(card => {
      console.log("Card to be added: ", card); // correct
      <Card
        title={card}
        key={card.toString()}
        content="Content of the card goes here"
      />;
      console.log("added: ", createCards); // undefined
    });
    // return createCards; // needed?
  }
  render() {
    return (
      <div className="list">
        <h2>
          {this.props.title}
        </h2>
        <div className="cards">
          {this.listCards(this.props.cards)}
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
