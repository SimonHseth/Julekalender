import React, { useState } from 'react';
import {Wheel} from 'react-custom-roulette';

const data = [
    { option: "1" },
    { option: "2" },
    { option: "3" },
  ];

  export default () => {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(false);
    
  
    const handleSpinClick = () => {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    };
  
    return (
      <>
    <p>Test</p>
    <Wheel
      mustStartSpinning={mustSpin}
      prizeNumber={3}
      data={data}
      backgroundColors={['#3e3e3e', '#df3428']}
      textColors={['#ffffff']}
    />
        <button onClick={handleSpinClick}>SPIN</button>
        {!mustSpin ? data[prizeNumber].option : "0"}
      </>
    );
  };
