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
    const selectedItem = props.items.find(el => el.value === props.value || el.title === props.value)

    const [isOpen,setIsOpen] = useState<boolean>(false)

    const toggleItems = () =>  setIsOpen(!isOpen)

    const onItemClick = (value:any) => {
        props.onChange(value)
        toggleItems()
    }

    return (
        <div>
            <span className={s.selected} onClick={toggleItems}>
                {selectedItem && selectedItem.title}
            </span>
            {isOpen &&
                props.items.map((i, index) => <div className={s.item} key={index} onClick={()=>onItemClick(i.value)}>
                {i.title}
            </div>)}
        </div>
    );
};

export default Select;



