import React from 'react';
import './App.css';
import Header from './Header';
import Technologies from './Technologies';
import Accordion from './components/Accordion/Accordion';

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
      <Rating />
      <Accordion />
    </div>
  );
}

const Rating = () => {
  return (
    <div>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  )
}


const Star = () => {
  return (
    <div>Star</div>
  )
}

export default App;
