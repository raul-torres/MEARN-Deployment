import React from 'react';
import './App.css';
import './components/PetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Box,
    Card,
    Image,
    Heading,
    Text,
    Button
  } from 'rebass';

import PetForm from './components/PetForm';

import Main from './views/main';

function App() {
  return (
    <div className="App">
      <Heading fontSize = {[7]}>Pet Shelter</Heading>
      <Main />
    </div>
  );
}

export default App;
