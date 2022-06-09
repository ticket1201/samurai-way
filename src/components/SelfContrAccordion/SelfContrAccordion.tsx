import React, {useState} from 'react';

type AccordionPropsType = {
    title: string
}

export const SelfContrAccordion = (props: AccordionPropsType) => {

    let [isCollapsed,setIsCollapsed] = useState(false)

    console.log('Accordion rendering');

        return (
            <div>
                <AccordionTitle title={props.title}/>
                <button onClick={()=>{setIsCollapsed(!isCollapsed)}}>TOGGLE</button>
                {!isCollapsed && <AccordionBody/>}
            </div>
        )


   
}

type AccordionTitleType = {
    title: string
}

const AccordionTitle = (props: AccordionTitleType) => {
    console.log('AccordionTitle rendering');
    return (
        <h3>{props.title}</h3>
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

