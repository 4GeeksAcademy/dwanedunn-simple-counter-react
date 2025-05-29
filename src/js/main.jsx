import React from 'react';
import ReactDOM from 'react-dom/client';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap';

// index.css'
import '../styles/index.css';

// components
import SimpleCounter from './components/SimpleCounter';

let Counter = 0;
let one = 0;
let two = 0;
let three = 0;
let four = 0;

setInterval(function () {
  four = Math.floor(Counter / 1000) % 10;
  three = Math.floor(Counter / 100) % 10;
  two = Math.floor(Counter / 10) % 10;
  one = Math.floor(Counter / 1) % 10;

  // one = one % 10;
  // two = two % 10;
  // three = three % 10;
  // four = four % 10;
  console.log(
    'Counter',
    Counter,
    'one',
    one,
    'two',
    two,
    'three',
    three,
    'four',
    four
  );
  Counter++;
}, 1000);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleCounter
      digitOne={one}
      digitTwo={two}
      digitThree={three}
      digitFour={four}
    />
  </React.StrictMode>
);
