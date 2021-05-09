import React, { useState } from "react";
import { Select } from 'antd'

const { Option } = Select;

const SelectMultiCstm = ({ data, onSelect, placeholder, style={} }) => {
    return (
        <Select

            mode="multiple"
            allowClear
            style={style}
            placeholder={placeholder}
            onChange={onSelect}
        >
            {
                data.map(d => (
                    <Option key={d.value} value={d.value}>
                        {d.text}
                    </Option>
                ))
            }
        </Select>
    )
}

export default SelectMultiCstm;