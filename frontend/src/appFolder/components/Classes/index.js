import React from "react";
import { Link } from 'react-router-dom';
import { List } from 'antd';


const Classes = ({data}) => {

    return (
        <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={
              <span>
                  <span>{item.grade}</span>
                  <Link to={`/classroom/${item.schoolId}`} className="ant-btn" style={{float: "right"}}>
                    Assign Homework
                  </Link>
              </span>
            }
              description={`students count : ${item.students}`}
            />
          </List.Item>
        )}
      />
    )
}

export default Classes;