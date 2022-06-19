import React from 'react';

type AccordionPropsType = {
    title: string,
    accordionCollapsed: boolean
    onClick: (accordionCollapsed: boolean) => void
}

const Accordion = (props: AccordionPropsType) => {
    return <div>
        <AccordionTitle title={props.title} onClick={() => props.onClick(!props.accordionCollapsed)}/>
        {!props.accordionCollapsed ? <AccordionBody/> : ''}
    </div>
}

type AccordionTitleType = {
    title: string
    onClick: () => void

}

const AccordionTitle = (props: AccordionTitleType) => {
    console.log('AccordionTitle rendering');
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
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

export default Accordion;