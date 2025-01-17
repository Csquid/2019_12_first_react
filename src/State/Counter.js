import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
    state = {
        count: 0
    };
    add = () => {
      //console.log("add");
      //this.state.count = 1;
      //this.setState({count: this.state.count + 1});
      this.setState(current => ({count: current.count + 1}));
    };
    minus = () => {
      //console.log("minus");
      //this.setState({count: this.state.count - 1});
      this.setState(current => ({count: current.count - 1}));
    };
   
    render() {
      return (
      <div>
        <h1>The number is { this.state.count }</h1>
        <button type="button" className="btn btn-primary" onClick={this.add}>Add</button>
        <button type="button" className="btn btn-primary" onClick={this.minus}>Minus</button>
        
      </div>
      
      );
    }
}

export default Counter;
