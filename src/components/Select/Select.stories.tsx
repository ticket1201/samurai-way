import React, { useState} from 'react';
import Select from './Select';

export default {
    title: 'Select',
};

export const ModeChanging = () => {
    const [value, setValue] = useState<any>(1);
    const onChange = (e:React.MouseEvent<HTMLDivElement>) => {
      setValue(e.currentTarget.textContent)
    }

    const items = [{title:'leha', value:1}, {title:'serega', value:2}, {title:'valera',value:3}]

    return <Select items={items}  onChange={onChange} value={value}/>
}