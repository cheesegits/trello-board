import React, { Component } from "react";

import List from "./list";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      cardList: []
    }
    this.onAddInputChanged = this.onAddInputChanged.bind(this);
    this.onAddSubmit = this.onAddSubmit.bind(this);
  }
  onAddInputChanged(characters) {
    // console.log("keystroke received: ", characters);
    this.setState({
      inputValue: characters // not sure if this will work
    });
  }
  onAddSubmit(newCardTitle) {
    var newArray = this.state.cardList.slice();
    // console.log("Current state: ", newArray);
    // console.log("Card to be pushed: ", this.state.inputValue);
    newArray.push(this.state.inputValue);
    this.setState({ cardList: newArray });
    // console.log("Was the new card added to the array?: ", this.state.cardList);
  }
  render() {
    return (
      <div className="trello-board">
        <h1>Trello Board</h1>
        <div className="lists">
          <List
            title="To-Do"
            onChange={character => this.onAddInputChanged}
            onSubmit={newCardTitle => this.onAddInputChanged}
          />
          <List
            title="In Progress"
            onChange={character => this.onAddInputChanged}
            onSubmit={newCardTitle => this.onAddInputChanged}
            }
          />
          <List
            title="Finished"
            onChange={character => this.onAddInputChanged}
            onSubmit={newCardTitle => this.onAddInputChanged}
          />
        </div>
      </div>
    );
  }
}

module.exports = Board;
