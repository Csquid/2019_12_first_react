/*
  Component를 작성할때마다 [ import React from 'react'; ] 를 써주어야한다.
  이것을 작성하지않으면 React는 여기에 jsx가 있는 Component를 사용하는것을 이해하지 못한다.
*/

import React from 'react';
import PropTypes from "prop-types";
import Potato from './Potato';
import Singer from './Singer';
import {likeSinger} from './DataBase';

function Food(props) {
  return <h3>I Like {props.name} </h3>
}

function Apple({user_name}) {
  return <h3>User Name is {user_name} </h3>
}

function renderSinger(singer, index) {
  console.log(singer);
  return <Singer name={singer.name} picture={singer.img_url} key={index} />
}

const Children = (props) => {
  return <div>안녕하세요. {props.children} 님</div>
}

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      {/* Component에  정보를 보내는 방법 */}
      {/* name과 같이 정해져있지않다.*/}
      {/* name, fav 같은 것을 property라고 한다 (속성) 사용자가 속성의 이름을 원하는걸로 만들어줄수있다.*/}
      <Food 
        name = "kimchi" 
        something = { true } 
        papapapap = { ["hello", 1, 2, 3, 4, true] }
      />

      {/*
        <Food name = "ramen"/>
        <Food name = "samgiopsal"/>
        <Food name = "chukumi"/>
      */}

      {["ramen", "samgiopsal", "chukumi"].map(foodName => 
        <Food name={foodName}/>
      )}
      
      <Potato />
      <Apple user_name = "lake0019"/>
      <Apple user_name = "dmsqlctnekf"/>

      <br />
      {/*likeSinger.map(renderSinger)*/}
      
      { likeSinger.map(singer => 
        <Singer 
          key={singer.id}
          name={singer.name} 
          rating={singer.rating}
          picture={singer.img_url} 
        />) 
      }

      {["정준영", "이순신"].map(name => 
        <Children>
          {name}
        </Children>  
      )}
        
    </div>
  );
}

Singer.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired
}
export default App;
