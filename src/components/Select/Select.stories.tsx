import React, { useState} from 'react';
import Select from './Select';

export default {
    title: 'Select',
};

export const WithValue = () => {
    const [value, setValue] = useState<any>(1);


    const items = [{title:'leha', value:1}, {title:'serega', value:2}, {title:'valera',value:3}]

    return <Select items={items}  onChange={setValue} value={value}/>
}

export const WithoutValue = () => {
    const [value, setValue] = useState<any>(null);

    const items = [{title:'leha', value:1}, {title:'serega', value:2}, {title:'valera',value:3}]

    return <Select items={items}  onChange={setValue} value={value}/>
}