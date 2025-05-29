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
setInterval(function () {
  const four = Math.floor(Counter / 1000);
  const three = Math.floor(Counter / 100);
  const two = Math.floor(Counter / 10);
  const one = Math.floor(Counter / 1);
  console.log('one:', one, 'two:', two, 'three:', three, 'four:', four);
  Counter++;
}, 1000);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleCounter
      digitOne={one}
      digittwo={two}
      digitThree={three}
      digitFour={four}
    />
  </React.StrictMode>
);
