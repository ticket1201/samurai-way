import React from 'react';
import './App.css';
import Header from './Header';
import Technologies from './Technologies';

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
      <div>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
    </div>
  );
}

const Star = () => {
  return(
    <div>Star</div> 
  )
}


export default App;
