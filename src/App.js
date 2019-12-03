/*
  Component를 작성할때마다 [ import React from 'react'; ] 를 써주어야한다.
  이것을 작성하지않으면 React는 여기에 jsx가 있는 Component를 사용하는것을 이해하지 못한다.
*/

import React from 'react';
import Tomato from './Tomato';

function App() {
  return (
    <div>
        <h1>Hello World!</h1>
        <Tomato />
    </div>
  );
}

export default App;
