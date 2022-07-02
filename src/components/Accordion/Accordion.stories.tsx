import Accordion, {AccordionBodyType, AccordionPropsType} from './Accordion';
import {ComponentMeta, Story} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {ChangeEvent, useState} from 'react';


export default {
    title: 'Accordion',

    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const callback = action('accordion mode changed')
const onClickCallback = action('some item was clicked');

const Template: Story<AccordionPropsType & AccordionBodyType> = (args) => <Accordion {...args}/>

export const ChangeableAccordion = Template.bind({})

ChangeableAccordion.args = {
    title: 'Menu',
    accordionCollapsed: false,
    items:[{title:'leha', value:1}, {title:'serega', value:2}, {title:'valera',value:3}],
    onChange: callback,
    onClick: onClickCallback
}

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    const onClickHandler = ( ) => {
        setValue(!value)
    }
   return <Accordion accordionCollapsed={value} title={'Menu'} onClick={onClickCallback} onChange={onClickHandler} items={[{title:'leha', value:1}, {title:'serega', value:2}, {title:'valera',value:3}]}/>
}