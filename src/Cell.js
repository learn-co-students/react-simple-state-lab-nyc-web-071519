import React, { Component } from 'react';

export default class Cell extends Component {

    constructor(props) {
        super(props);
        this.state = {
          color: this.props.value
        };
    }

    darken = () => {
        // console.log(`before setState: ${this.state.color}`)
     
        this.setState({
            color: "#333"
        });
     
        // console.log(`after setState: ${this.state.color}`)
    }

    render() {
        return (
            <div className="cell" onClick={this.darken} style={{backgroundColor: this.state.color}}/>
        );
    }
}
