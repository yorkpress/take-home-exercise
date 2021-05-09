import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Layout, Menu, Typography } from 'antd';
import { AppContext, initState } from "../../store"

import "./index.css"


const
{ Header, Content, Footer } = Layout,
{ Title } = Typography;

const Loading = ({ children }) => {
    const { store, setStore } = useContext(AppContext);
    const onLogout = () => setStore(initState);

    return (
        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to='/dashboard'>Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" style={{float: "right"}} onClick={()=>onLogout()}>Logout</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
        <Title level={2} style={{margin: "15px 0px"}}>{store.pageTitle}</Title>
          <div className="site-layout-content">{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>designed by Mohamed-Taher</Footer>
      </Layout>
    )
}

export default Loading;