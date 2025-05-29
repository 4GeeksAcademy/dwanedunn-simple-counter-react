import React from 'react';
import { FaRegClock } from 'react-icons/fa6';

const SimpleCounter = () => {
  return (
    <div className="counter-wrapper">
      <div className="cal-icon">
        <FaRegClock />
      </div>
      <div className="digit-4"></div>
      <div className="digit-3"></div>
      <div className="digit-2"></div>
      <div className="digit-1"></div>
    </div>
  );
};

export default SimpleCounter;
