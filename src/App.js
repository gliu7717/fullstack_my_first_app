import './App.css';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  HomePage,
  CounterButtonPage,
  PeopleListPage,
  NotFoundPage,
  ProtectedPage,
  ControlledFormPage
} from './pages';


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
      <Router>
        <Link to = "/counter">Go to Counter Page</Link>
        <Routes>         
        <Route path="/"
        element=<HomePage/> />
        <Route path="/counter"
          element = <CounterButtonPage/> />
        <Route path="/people-list"
          element = <PeopleListPage/> />
        <Route path="/protected"
          element = <ProtectedPage/> />

        <Route path="/controlled"
          element = <ControlledFormPage/> />

        <Route path="*"  
          element = <NotFoundPage/> />
        
        </Routes>
        </Router>
    </div>
  );
}

export default App;
