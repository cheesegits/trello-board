import React, { Component } from "react";

import ListContainer from "./list-container";

class TrelloBoard extends Component {
  render() {
    return (
      <div className="board">
        <h1>Trello Board</h1>
        <div className="list-containers">
          <ListContainer title="To-Do" />
          <ListContainer title="In Progress" />
          <ListContainer title="Finished" />
        </div>
      </div>
    );
  }
}

module.exports = TrelloBoard;
