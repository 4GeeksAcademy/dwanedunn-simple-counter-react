import React from 'react';
import { FaRegClock } from 'react-icons/fa6';

let Counter = 0;
setInterval(() => {
  const four = Math.floor(Counter / 1000);
  const three = Math.floor(Counter / 100);
  const two = Math.floor(Counter / 10);
  const one = Math.floor(Counter / 1);
  console.log('one:', one, 'two:', two, 'three:', three, 'four:', four);
}, 1000);

const SimpleCounter = (props) => {
  return (
    <div className="bg-dark text-white counter-wrapper d-flex align-items-center justify-content-center p-2">
      <div className="cal-icon">
        <FaRegClock />
      </div>
      <div className="digit-4 p-1">{props.digitFour}</div>
      <div className="digit-3 p-1">{props.digitThree}</div>
      <div className="digit-2 p-1">{props.digitTwo}</div>
      <div className="digit-1 p-1">{props.digitOne}</div>
    </div>
  );
};

export default SimpleCounter;
