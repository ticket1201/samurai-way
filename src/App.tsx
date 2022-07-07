import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Technologies from './Technologies';
import Accordion from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import { OmitProps } from 'antd/lib/transfer/ListBody';
import {SelfContrAccordion} from './components/SelfContrAccordion/SelfContrAccordion';
import {UncontrolledRating} from './components/UncotrolledRating/UncontrolledRating';
import {UncontrolledOnOff} from './components/UncotrolledOnOff/UncontrolledOnOff';
import {OnOff} from './components/OnOff/OnOff'

const App = () => {

    // let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [onOffValue,setonOffValue] = useState<boolean>(false)

    return (
        <div>
          {/*  <PageTitle title = {'This is a first title'}/>
            <PageTitle title = {'This is a second title'}/>
            <Header/>
            Article 1
            <Technologies/>
            <UncontrolledRating value={3}/>

            Article 2
            <Accordion title = {'This is an Accordion title2'} isCollapsed = {false}/>
            <Rating value={0}/>
            <Rating value={0}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={ratingValue} onClick = {setRatingValue}/>
            <SelfContrAccordion title={'menu'}/>

            <UncontrolledRating/>
            <OnOff/>
            <UncontrolledOnOff/>*/}
            <SelfContrAccordion title={'users'}/>
          {/*  <OnOff IsOn={onOffValue} setIsOn={setonOffValue}/>
            <Accordion items={[]} onClick={()=>{}} title = {'This is an Accordion title'} accordionCollapsed={accordionCollapsed} onChange= {setAccordionCollapsed}/>*/}
        </div>
    );
}

type PageTitleType = {
    title: string
}


const PageTitle = (props:PageTitleType) => {
    return <h1>{ props.title }</h1>
}

export default App;
