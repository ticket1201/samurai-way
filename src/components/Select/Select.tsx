import React, {useState} from 'react';
import s from './Select.module.css'

export type SelectItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value: any
    items: SelectItemType[]
    onChange: (value: any) => void
}

const Select = (props: SelectPropsType) => {
    const findItem = props.items.filter(el => el.value === props.value || el.title === props.value)[0].title

    const [isOpen,setIsOpen] = useState<string>(s.close)

    const onclickHandler = () => {
        if(isOpen === s.close){
            setIsOpen(s.open)
        }
        else setIsOpen(s.close)
    }



    return (
        <div>
            <div className={s.selected} onClick={onclickHandler}>{findItem}</div>
            {props.items.map((i, index) => <div className={isOpen} key={index} onChange={ () => props.onChange(i.value) }>{i.title}</div>)}
        </div>
    );
};

export default Select;



