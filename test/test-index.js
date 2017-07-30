import React from "react";
import TestUtils from "react-addons-test-utils";
import Chai from "chai";
const should = Chai.should();

import Card from "../js/components/card";
import List from "../js/components/list";
import ListContainer from "../js/components/list-container";
import TrelloBoard from "../js/components/board";

describe("Card component", function() {
  it("Card component renders correctly", function() {
    var title = "Test Title";
    var content = "Test Content";
    var renderer = TestUtils.createRenderer();
    renderer.render(<Card title={title} content={content} />);
    var result = renderer.getRenderOutput();
    result.type.should.equal("div");
    var card = result.props;
    card.className.should.equal("card");
    card.children[0].type.should.equal("h3");
    card.children[0].props.children.should.equal("Test Title");
    card.children[1].type.should.equal("p");
    card.children[1].props.children.should.equal("Test Content");
  });
});
describe("List component", function() {
  it("List component renders correctly", function() {
    var testTitle = "Test List Title";
    var renderer = TestUtils.createRenderer();
    renderer.render(<List title={testTitle} />); // "Cannot read property 'map' of undefeined" - not sure how to pass testCreateCards
    var list = renderer.getRenderOutput();
    console.log(list);
    // list.className.should.equal("list");
    // list.children[0].type.should.equal("h2");
    // list.children[0].props.children.should.equal("Test List Title");
    // list.children[1].type.should.equal("div");
    // list.children[1].className.should.equal("cards");
    // list.children[1].props.children.should.equal(title of each card); // need to have rederer output to see structure
    // list.children[2].type.should.equal("div");
    // list.children[2].props.children.should.equal("form"); // need to have rederer output to see structure
    // list.children[2].props.children.should.equal("input");
    // list.children[2].props.children.should.equal("button");
  });
});
describe("ListContainer", function() {
  it("ListContainer component renders correctly", function() {
    var listTitle = "Test ListContainer Title";
    var cards = ["Test Card 1", "Test Card 2"];
    var renderer = TestUtils.createRenderer();
    renderer.render(<ListContainer title={listTitle} cards={cards} />);
    var listContainer = renderer.getRenderOutput();
    // pass
    listContainer.props.className.should.equal("list-container");
    listContainer.props.children.props.title.should.equal(
      "Test ListContainer Title"
    );
    // fail
    listContainer.props.children.props.cards.should.equal([
      "Should be ['Test Card 1', 'Test Card 2'] - Might need to setState of cardList rather than pass props"
    ]);
  });
});
describe("Board component", function() {
  it("Board component renders correctly", function() {
    var renderer = TestUtils.createRenderer();
    renderer.render(<TrelloBoard />);
    var board = renderer.getRenderOutput();
    board.type.should.equal("div");
    board.props.className.should.equal("board");
    board.props.children[0].type.should.equal("h1");
    board.props.children[1].type.should.equal("div");
    board.props.children[1].props.className.should.equal("list-containers");
    board.props.children[1].props.children[0].props.title.should.equal("To-Do");
    board.props.children[1].props.children[1].props.title.should.equal(
      "In Progress"
    );
    board.props.children[1].props.children[2].props.title.should.equal(
      "Finished"
    );
  });
});
