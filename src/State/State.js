import React from 'react';

import '../include/bootstrap'

import PropTypes from 'prop-types';
import Counter from './Counter';
import Movies from './Movies';

class State extends React.Component {
    constructor(props) {
        super(props);
    }

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

    render() {
        return (
            <div>
                {/*<Counter >*/}
                <Movies />
            </div>
        );
    }
}

export default State;

