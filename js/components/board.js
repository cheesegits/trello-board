// export class MyNavbar extends React.Component {

import React, {Component} from 'react';

import List from './list';

var Board = function() {
    return (
        <div className="trello-board">
            <List title="To-Do"/>
            <List title="In Progress"/>
            <List title="Finished"/> 
        </div>
    );
};

module.exports = Board;