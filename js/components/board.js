import React, { Component } from "react";

import List from "./list";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      cardList: []
    };
    this.onAddInputChanged = this.onAddInputChanged.bind(this);
    this.onAddSubmit = this.onAddSubmit.bind(this);
  }
  onAddInputChanged(characters) {
    console.log("keystrokes received: ", characters.target.value);
    this.setState(
      {
        inputValue: characters.target.value
      },
      function() {
        console.log("input value is equal to: ", this.state.inputValue);
      }
    );
  }
  onAddSubmit(event) {
    event.preventDefault();
    var newArray = this.state.cardList.slice();
    console.log("Current state: ", newArray);
    console.log("Card to be pushed: ", this.state.inputValue);
    newArray.push(this.state.inputValue);
    this.setState({ cardList: newArray }, function() {
      console.log("new cardList: ", this.state.cardList);
    });
  }
  render() {
    return (
      <div className="trello-board">
        <h1>Trello Board</h1>
        <div className="lists">
          <List
            title="To-Do"
            onChange={characters => this.onAddInputChanged(characters)}
            onSubmit={this.onAddSubmit}
          />
          <List
            title="In Progress"
            onChange={characters => this.onAddInputChanged(characters)}
            onSubmit={this.onAddSubmit}
          />
          <List
            title="Finished"
            onChange={characters => this.onAddInputChanged(characters)}
            onSubmit={this.onAddSubmit}
          />
        </div>
      </div>
    );
  }
}

module.exports = Board;
