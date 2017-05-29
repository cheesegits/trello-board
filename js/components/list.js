import React, {Component} from 'react';

import Card from './card';

class List extends Component {
    render() {
        return (
            <div className="list">
                <h1>{this.props.title}</h1>
                <Card 
                    title="Card Title"
                    content="Content of the card goes here"/>
            </div>
        );
    }
};

module.exports = List;