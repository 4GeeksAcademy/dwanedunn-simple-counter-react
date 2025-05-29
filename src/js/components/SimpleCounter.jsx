import React from 'react';
import { FaRegClock } from 'react-icons/fa6';

const SimpleCounter = () => {
  return (
    <div className="bg-dark text-white counter-wrapper d-flex align-items-center justify-content-center p-2">
      <div className="cal-icon">
        <FaRegClock />
      </div>
      <div className="digit-4 p-1">0</div>
      <div className="digit-3 p-1">0</div>
      <div className="digit-2 p-1">0</div>
      <div className="digit-1 p-1">1</div>
    </div>
  );
};

export default SimpleCounter;
