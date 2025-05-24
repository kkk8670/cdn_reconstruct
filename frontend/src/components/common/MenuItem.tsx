// src/components/common/MenuItem.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MenuItemProps {
    item: Array<{
        path: string;
        meta: {
            title?: string;
            icon?: string;
        };
    }>;
    isCollapsed: boolean;
    parentPath: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, isCollapsed, parentPath }) => {
    const location = useLocation();

    return (
        <>
            {item.map((subItem) => {
                const fullPath = subItem.path.startsWith('/')
                    ? subItem.path
                    : `${parentPath}${parentPath.endsWith('/') ? '' : '/'}${subItem.path}`;

                const isActive = location.pathname === fullPath;

                return (
                    <Link
                        key={fullPath}
                        to={fullPath}
                        className={`menu-item ${isActive ? 'active' : ''}`}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '14px 20px',
                            margin: '4px 0',
                            borderRadius: isCollapsed ? '50%' : '4px',
                            transition: 'all 0.3s',
                        }}
                    >
                        {subItem.meta.icon && (
                            <span
                                className={`menu-icon ${subItem.meta.icon}`}
                                style={{ marginRight: isCollapsed ? '0' : '10px' }}
                            />
                        )}

                        {!isCollapsed && (
                            <span className="menu-title">{subItem.meta.title || 'Menu Item'}</span>
                        )}
                    </Link>
                );
            })}
        </>
    );
};

export default MenuItem;