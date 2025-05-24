// src/components/common/SubMenuItem.tsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MenuItem from './MenuItem';

interface SubMenuItemProps {
    item: {
        path: string;
        meta: {
            title?: string;
            icon?: string;
        };
        children?: Array<{
            path: string;
            meta: {
                title?: string;
                icon?: string;
                hidden?: boolean;
            };
        }>;
    };
    isCollapsed: boolean;
    parentPath: string;
}

const SubMenuItem: React.FC<SubMenuItemProps> = ({ item, isCollapsed, parentPath }) => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    // Check if any child route is active
    const hasActiveChild = item.children?.some(child => {
        const fullPath = child.path.startsWith('/')
            ? child.path
            : `${parentPath}${parentPath.endsWith('/') ? '' : '/'}${child.path}`;
        return location.pathname === fullPath;
    });

    // Open submenu if a child is active
    React.useEffect(() => {
        if (hasActiveChild) {
            setIsOpen(true);
        }
    }, [hasActiveChild]);

    const toggleSubmenu = () => {
        if (!isCollapsed) {
            setIsOpen(!isOpen);
        }
    };

    // Filter out hidden items
    const visibleChildren = item.children?.filter(child => !child.meta.hidden) || [];

    if (visibleChildren.length === 0) {
        return null;
    }

    return (
        <div className="submenu-container">
            <div
                className={`submenu-title ${hasActiveChild ? 'active' : ''}`}
                onClick={toggleSubmenu}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: isCollapsed ? 'center' : 'space-between',
                    padding: '14px 20px',
                    cursor: 'pointer',
                    borderRadius: isCollapsed ? '50%' : '4px',
                    transition: 'all 0.3s',
                }}
            >
                <div className="flex items-center">
                    {item.meta.icon && (
                        <span
                            className={`menu-icon ${item.meta.icon}`}
                            style={{ marginRight: isCollapsed ? '0' : '10px' }}
                        />
                    )}

                    {!isCollapsed && (
                        <span className="menu-title">{item.meta.title || 'Submenu'}</span>
                    )}
                </div>

                {!isCollapsed && (
                    <span
                        className={`arrow-icon ${isOpen ? 'rotate-180' : ''}`}
                        style={{ transition: 'transform 0.3s' }}
                    >
                        ▼
                    </span>
                )}
            </div>

            {/* Submenu items */}
            <div
                className="submenu-items"
                style={{
                    display: (isOpen && !isCollapsed) ? 'block' : 'none',
                    marginLeft: '20px',
                }}
            >
                <MenuItem
                    item={visibleChildren}
                    isCollapsed={false}
                    parentPath={item.path}
                />
            </div>
        </div>
    );
};

export default SubMenuItem;