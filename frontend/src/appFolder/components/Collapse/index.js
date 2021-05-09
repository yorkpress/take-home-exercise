import React from "react";
import { Collapse } from 'antd';

const { Panel } = Collapse;

const Collps = ({
    data,
    defaultActiveKey,
    collapseStyle={},
    onChange = () => {}
}) => {
    
    return (
        <Collapse style={collapseStyle} defaultActiveKey={[defaultActiveKey]} onChange={onChange}>
            {
                data.map((itm, ind) => (
                    <Panel header={itm.header} key={ind+1}>
                        {itm.body}
                    </Panel>
                ))
            }
        </Collapse>
    )
}

export default Collps;