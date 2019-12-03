/*
  Component를 작성할때마다 [ import React from 'react'; ] 를 써주어야한다.
  이것을 작성하지않으면 React는 여기에 jsx가 있는 Component를 사용하는것을 이해하지 못한다.
*/

import React from 'react';
import Potato from './Potato';

const iLikeHuman = [
  {
    id: 1,
    name: "Park Bo Young",
    img_url: "https://upload.wikimedia.org/wikipedia/commons/f/fb/160511_Park_Bo-young.jpg"
  },
  {
    id: 2,
    name: "Ha Yeonsu",
    img_url: "http://mintstudio.com/wp-content/uploads/2015/01/2V4A8045v2.jpg"
  }
]

function Food(props) {
  return <h3>I Like {props.name} </h3>
}

function Apple({user_name}) {
  return <h3>User Name is {user_name} </h3>
}

function Human({name, picture}) {
  return (
    <div>
      <h3>I Like Human is {name}</h3>
      <img src={picture} alt="fuck"/>
    </div>
  )
}

function App(props) {
  console.log(props);
  return (
    <div>
      <h1>Hello World!</h1>
      {/* Component에  정보를 보내는 방법 */}
      {/* name과 같이 정해져있지않다.*/}
      {/* name, fav 같은 것을 property라고 한다 (속성) 사용자가 속성의 이름을 원하는걸로 만들어줄수있다.*/}
      <Food 
        name = "kimchi" 
        something = { true } 
        papapapap = {
          ["hello", 1, 2, 3, 4, true]
        }
      />
      <Food name = "ramen"/>
      <Food name = "samgiopsal"/>
      <Food name = "chukumi"/>
      <Potato />
      <Apple user_name = "lake0019"/>
      <Apple user_name = "dmsqlctnekf"/>
      { iLikeHuman.map( 
        (human, index) => 
        <Human 
          id={index}
          name={human.name} 
          picture={human.img_url} 
        />) 
      }
        
    </div>
  );
}

export default App;
