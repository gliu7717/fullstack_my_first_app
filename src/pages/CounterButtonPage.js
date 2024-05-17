import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { CounterButton } from '../CouterButton';
import { CongratulationsMessage } from '../CongratulationMessage';
import { Greeting } from '../Greeting';

export const CounterButtonPage = () => {
   const location = useLocation()
   console.log( queryString.parse(location.search))
   const startingValue = queryString.parse(location.search).startingValue
 
  const [numberOfClicks, setNumberOfClicks] = useState(Number(startingValue))
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  const {name} = useParams()
  return (
    <>
    <h1>  The Counter Button Page</h1>
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