import React, { useState, useEffect } from 'react';
import SimpleCounter from './SimpleCounter';

export const Home = () => {
  const [counter, setCounter] = useState(0);
  //   let Counter = 0;
  const one = Math.floor(counter) % 10;
  const two = Math.floor(counter / 10) % 10;
  const three = Math.floor(counter / 100) % 10;
  const four = Math.floor(counter / 1000) % 10;
  // update the digits split up into four variables

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % 10000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <SimpleCounter
        digitOne={one}
        digitTwo={two}
        digitThree={three}
        digitFour={four}
      />
    </div>
  );
};
