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
  ControlledFormPage,
  UncontrolledFormPage,
  UserProfilePage
} from './pages';
import { NavBar } from './NavBar';

const appLinks = [
  { url: '/', label: 'Home' },
  { url: '/counter', label: 'Counter' },
  { url: '/people-list', label: 'People List' },
  { url: '/controlled', label: 'Controlled' },
  { url: '/uncontrolled', label: 'Uncontrolled' },
  { url: '/user', label: 'User Profile' },
];


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar links={appLinks}/>
        <div className='App-header'>
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
        <Route path="/uncontrolled"
          element = <UncontrolledFormPage/> />
        <Route path="/user"
          element = <UserProfilePage/> />

        <Route path="*"  
          element = <NotFoundPage/> />
        </Routes>

        </div>
        </Router>
        
    </div>
  );
}

export default App;
