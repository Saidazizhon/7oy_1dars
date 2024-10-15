import React from 'react';
import { Select } from 'antd';

const CustomSelect = ({placeholder, option, setChooseId}) => {
    const onChange = (value) => {
        setChooseId(`selected ${value}`);
    };
    
    return (
        <Select
            className='w-[350px]'
            size='large'
            allowClear
            showSearch
            placeholder={placeholder}
            optionFilterProp="label"
            onChange={onChange}
            options={option}
        />
    )
};
export default CustomSelect;