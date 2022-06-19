import React, {useState} from 'react';

type AccordionPropsType = {
    title: string
}

export const SelfContrAccordion = (props: AccordionPropsType) => {

    let [isCollapsed, setIsCollapsed] = useState(false)

    console.log('Accordion rendering');

    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => setIsCollapsed(!isCollapsed)}/>
            {!isCollapsed && <AccordionBody/>}
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
        <h3 onClick={()=>props.onClick()}>{props.title}</h3>
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

