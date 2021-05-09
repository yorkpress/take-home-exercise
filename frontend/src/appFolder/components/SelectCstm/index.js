import React, { useState } from "react";
import { Select } from 'antd'

const { Option } = Select;

const SelectCstm = ({ data, onSelect, defaultValue }) => {
    return (
        <Select defaultValue={defaultValue} style={{ width: 120 }} onChange={onSelect}>
            {
                data.map((d, i) => (
                    <Option key={i} value={d.value}>
                        {d.text}
                    </Option>
                ))
            }
        </Select>
    )
}

export default SelectCstm;