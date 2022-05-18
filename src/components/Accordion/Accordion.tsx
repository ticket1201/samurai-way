import React from "react";

type AccordionPropsType = {
    title: string,
    isCollapsed: boolean
}

const Accordion = (props: AccordionPropsType) => {

    console.log('Accordion rendering');
    if(props.isCollapsed === false){
        return (
            <div>
                <AccordionTitle title={props.title}/>
                <AccordionBody/>
            </div>
        )
    }
    else{
        return(
            <div>
                <AccordionTitle title={props.title}/>
            </div>
        )
    }
   
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

export default Accordion;