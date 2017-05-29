// const React = require('react');
// const ReactDOM = require('react-dom');
// const createReactClass = require('create-react-class');

import React, {Component} from 'react';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <h2>{this.props.title}</h2>
                <p>{this.props.content}</p> 
            </div>
        );
    }
};

export default Card;    