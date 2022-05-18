import React from 'react';
import './App.css';
import Header from './Header';
import Technologies from './Technologies';
import Accordion from './components/Accordion/Accordion';
import {Rating} from "./components/Rating/Rating";
import { OmitProps } from 'antd/lib/transfer/ListBody';

const App = () => {
    return (
        <div>
            <PageTitle title = {'This is a first title'}/>
            <PageTitle title = {'This is a second title'}/>
            <Header/>
            Article 1
            <Technologies/>
            <Rating value={3}/>
            <Accordion title = {'This is an Accordion title'} isCollapsed = {true}/>
            Article 2
            <Accordion title = {'This is an Accordion title2'} isCollapsed = {false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
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
