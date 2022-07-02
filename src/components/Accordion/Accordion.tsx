import React from 'react';

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    title: string,
    accordionCollapsed: boolean
    onChange: (accordionCollapsed: boolean) => void
    items: Array<ItemType>
    onClick: (value: any) => void
}

const Accordion = (props: AccordionPropsType & AccordionBodyType) => {
    return <div>
        <AccordionTitle title={props.title} onClick={() => props.onChange(!props.accordionCollapsed)}/>
        {!props.accordionCollapsed ? <AccordionBody onChange={props.onClick} items={props.items}/> : ''}
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

export type AccordionBodyType = {
    items: ItemType[]
    onChange: (value: any) => void
}

const AccordionBody = (props: AccordionBodyType) => {
    console.log('AccordionBody rendering');
    return (
        <div>
            <ul>
                {props.items.map((i, index) => <li onClick={() => {
                    props.onChange(i.value)
                }} key={index}>{i.title}</li>)}
            </ul>
        </div>
    )
}

export default Accordion;