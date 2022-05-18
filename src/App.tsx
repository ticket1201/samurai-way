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
      <Accordion/>
    </div>
  );
}

const Star = () => {
  return (
    <div>Star</div>
  )
}

const Accordion = () => {

  console.log('Accordion rendering');
  
  return (
    <div>
      <AccordionTitle/>
      <AccordionBody/>
    </div>
  )
}


const AccordionTitle = () => {
  console.log('AccordionTitle rendering');
  return(
    <>This is accordion title text</>
  )
}


const AccordionBody = () => {
  console.log('AccordionBody rendering');
  return(
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

export default App;
