import React from 'react';
import ReactDOM from 'react-dom';

import Property from './Property/Property';
import State from './State/State';

/*
    ReactDOM.render(<App /><Tomato />, document.getElementById('potato'));
    이게 안되는 이유는 react application은 하나의 component 만을 rendering해야하기 때문이다.
*/
//ReactDOM.render(<Property/>, document.getElementById('property'));
ReactDOM.render(<State />, document.getElementById("state"))