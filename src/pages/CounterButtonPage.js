import React, { useState } from 'react';
import { CounterButton } from '../CouterButton';
import { CongratulationsMessage } from '../CongratulationMessage';
import { Greeting } from '../Greeting';

export const CounterButtonPage = () => {
  const [numberOfClicks, setNumberOfClicks] = useState(0)
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <>
    <h1>The Counter Button Page</h1>
    {hideMessage
        ? null
        : <CongratulationsMessage  numberOfClicks = {numberOfClicks} 
           threshold={10}
           onHide = {()=>setHideMessage(true)} />
        }        
        <CounterButton numberOfClicks={numberOfClicks} onIncrement={increment}/>
        <Greeting name="Gerry" numberofMessages={2} />
    </>
  );
}