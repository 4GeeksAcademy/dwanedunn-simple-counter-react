import React from 'react';
import { FaRegClock } from 'react-icons/fa6';

const SimpleCounter = ({ digitFour, digitThree, digitTwo, digitOne }) => {
  return (
    <div className="bg-dark text-white counter-wrapper d-flex align-items-center justify-content-center p-2">
      <div className="cal-icon">
        <FaRegClock className="border border-1 border-black" />
      </div>
      <div className="digit-4 p-1 border border-1 border border-black rounded">
        {digitFour}
      </div>
      <div className="digit-3 p-1 border border-1 border border-black rounded">
        {digitThree}
      </div>
      <div className="digit-2 p-1 border border-1 border border-black rounded">
        {digitTwo}
      </div>
      <div className="digit-1 p-1 border border-1 border border-black rounded">
        {digitOne}
      </div>
    </div>
  );
};

// SimpleCounter.propTypes = {
//   digitOne: React.PropTypes.number,
//   digitTwo: React.PropTypes.number,
//   digitThree: React.PropTypes.number,
//   digitFour: React.PropTypes.number,
// };

export default SimpleCounter;
