import React, { Component } from "react";

import List from "./list";

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      cardList: ["Card One", "Card Two"]
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
      <div className="list-container">
        <List
          title={this.props.title}
          cards={this.state.cardList}
          onChange={characters => this.onAddInputChanged(characters)}
          onSubmit={this.onAddSubmit}
        />
      </div>
    );
  }
}

module.exports = ListContainer;
