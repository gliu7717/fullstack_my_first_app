import './App.css';
import React,{useState} from 'react';

//import Greeting from './Greeting';
import {Greeting} from './Greeting';
import { PeopleList } from './PeopleList';
import { CounterButton } from './CouterButton';
import { CongratulationsMessage } from './CongratulationMessage';

function App() {
  const [numberOfClicks, setNumberofClicks] = useState(0)
  const [hideMessage, setHideMessage] = useState(false)
  const onIncrement = () => setNumberofClicks(numberOfClicks + 1)

  return (
    <div className="App">
      <header className="App-header">
        {hideMessage
        ? null
        : <CongratulationsMessage  numberOfClicks = {numberOfClicks} 
           threshold={10}
           onHide = {()=>setHideMessage(true)} />
        }
         
        
        <CounterButton numberOfClicks={numberOfClicks} onIncrement={onIncrement}/>
        <Greeting name="Gerry" numberofMessages={2} />

      </header>
    </div>
  );
}

export default App;
