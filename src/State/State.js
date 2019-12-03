import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

class State extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        isLoading: true,
        movies: []
    };

    /*

    **** Component Life Cycle ****

    componentDidMount() {
      console.log("component Rrendered");
    }
    componentDidUpdate() {
      console.log("I just Updated");
    }
    componentWillUnmount() {
      console.log("Good Bye, Cruel World");
    }
    */

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false, book: true })
        }, 6000)
    }

    render() {
        const {isLoading} = this.state;
        console.log("I'm Rendering");
        return (
            <div>
                <div>{ isLoading ? "Loading" : "We are Ready" }</div>
                <br />
                {/*<Counter />*/}
            </div>
        );
    }
}

export default State;

