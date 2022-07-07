import React, {useReducer} from 'react';
import {reducer} from './Reducer';

export type AccordionPropsType = {
    title: string
}


export const SelfContrAccordion = (props: AccordionPropsType) => {

    //let [state, setIsCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    console.log('Accordion rendering');

    return (
        <div>
            {/*<AccordionTitle title={props.title} onClick={() => setIsCollapsed(!state)}/>*/}
            <AccordionTitle title={props.title} onClick={ ()=>dispatch({type:'TOGGLE-COLLAPSED'}) }/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )


}

type AccordionTitleType = {
    title: string
    onClick: () => void
}

const AccordionTitle = (props: AccordionTitleType) => {
    console.log('AccordionTitle rendering');
    return (
        <h3 onClick={() => props.onClick()}>{props.title}</h3>
    )
}


const AccordionBody = () => {
    console.log('AccordionBody rendering');
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

