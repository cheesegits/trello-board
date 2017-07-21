import React, { Component } from "react";

import List from "./list";

class ListContainer extends Component {
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
    this.setState(
      {
        inputValue: characters.target.value
      },
      function() {}
    );
  }
  onAddSubmit(event) {
    event.preventDefault();
    var newArray = this.state.cardList.slice();
    newArray.push(this.state.inputValue);
    this.setState({ cardList: newArray }, function() {});
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
