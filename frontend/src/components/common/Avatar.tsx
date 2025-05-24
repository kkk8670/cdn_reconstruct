// src/components/common/AntsAvatar.tsx
import React from 'react';
import { Dropdown, Menu, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const AvatarLayout: React.FC = () => {
    const menu = (
        <Menu>
            <Menu.Item key="profile">Profile</Menu.Item>
            <Menu.Item key="settings">Settings</Menu.Item>
            <Menu.Divider />
            <Menu.Item key="logout">Logout</Menu.Item>
        </Menu>
    );

    return (
        <div className="layout-avatar-box flex items-center mx-4 cursor-pointer">
            <Dropdown overlay={menu} trigger={['click']}>
                <div className="flex items-center">
                    <Avatar icon={<UserOutlined />} />
                    {/* <span className="ml-2 hidden md:inline">User Name</span> */}
                </div>
            </Dropdown>
        </div>
    );
};

export default AvatarLayout;