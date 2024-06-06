import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { CounterButton } from '../CouterButton';
import { CongratulationsMessage } from '../CongratulationMessage';
import { Greeting } from '../Greeting';
import { DisplayIf } from '../DisplayIf';

export const CounterButtonPage = () => {
  const location = useLocation()
  console.log( queryString.parse(location.search))
  var startingValue = queryString.parse(location.search).startingValue
  console.log(startingValue)    
  if(!startingValue)  startingValue = 0
  const [numberOfClicks, setNumberOfClicks] = useState(Number(startingValue))
  const [hideMessage, setHideMessage] = useState(false);

  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  const {name} = useParams()
  return (
    <>
    <h1>  The Counter Button Page</h1>
    <DisplayIf condition={!hideMessage && numberOfClicks >= 10}>
        <CongratulationsMessage
            threshold={10}
            onHide={() => setHideMessage(true)} />
    </DisplayIf>

     
        <CounterButton numberOfClicks={numberOfClicks} onIncrement={increment}/>
        <Greeting name="Gerry" numberofMessages={2} />
    </>
  );
}