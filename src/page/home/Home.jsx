import { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Layout from '../layout/Layout.jsx'
export default function Home() {
    const items = [
        {
            label: '红包雨',
            key: '红包雨',
            icon: <MailOutlined />,
        },
        {
            label: '大转盘',
            key: '大转盘',
            icon: <AppstoreOutlined />,
        },
        {
            label: '贪吃蛇',
            key: '贪吃蛇',
            icon: <SettingOutlined />,
        },
    ];
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <div style={{padding:'30px'}}>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            <Layout type={current}/>
        </div>
    )
}