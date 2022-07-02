import {Story} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {ChangeEvent, useState} from 'react';


export default {
    title: 'Input',
};

const onChangeCallback = action('some was changed');

const Template:Story<HTMLInputElement> = (args) => <input onChange={action('want to change')}/>

export const UncontrolledInput = Template.bind({})
export const controlledInputWithFixedValues = Template.bind({})

controlledInputWithFixedValues.args = {
    title:'Controlled Input',
    value: 'it-incubator.by',
    onchange: onChangeCallback
}

export const ControlledInput = () => {
    const [patentValue, setParentValue] = useState('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement> ) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={patentValue} onChange={onChangeHandler} />;
}


export const ControlledCheckbox = () => {
    const [patentValue, setParentValue] = useState(true);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement> ) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type={'checkbox'} checked={patentValue} onChange={onChangeHandler} />;
}

export const ControlledSelect = () => {
    const [patentValue, setParentValue] = useState<string | undefined>('2');
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement> ) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={patentValue} onChange={onChangeHandler}>
        <option>none</option>
        <option value={'1'}>Moscow</option>
        <option value={'2'}>Minsk</option>
        <option value={'3'}>Kiev</option>
    </select>;
}
