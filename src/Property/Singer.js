import React from 'react';

/*

//Function형 Component
function Singer({id, name, picture, rating}) {
    return (<div>
        <h3>I Like Singer is {name}</h3>
        <h4> {rating}/10.0</h4>
        <img src={picture}
            alt="any"
            width="250"/>
    </div>);
}
*/

/*
//Lambda Function형 Component
const Singer = ({id, name, picture, rating}) => {
    return (<div>
        <h3>I Like Singer is {name}</h3>
        <h4> {rating}/10.0</h4>
        <img src={picture}
            alt="any"
            width="250"/>
    </div>);
}
*/

//Class형 Component
class Singer extends React.Component {
    render() {
        return (<div>
            <h3>I Like Singer is {this.props.name}</h3>
            <h4> {this.props.rating}/10.0</h4>
            <img src={this.props.picture}
                alt="any"
                width="250"/>
        </div>);
    }
}
export default Singer;
